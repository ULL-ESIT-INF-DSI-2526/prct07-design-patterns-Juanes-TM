import { EmailService } from "./interface";
import { EmailMessage, EmailResult, EmailStatus } from "./types";
import { LegacySmtpClient } from "./LegacySmtpClient";
import { timeStamp } from "node:console";


/**
 * Clase que sirve como adaptador de la clase LegacySmtpClient
 */
export class SmtpAdapter implements EmailService {
  private correosEnviados: EmailResult[] = [];
  public counter: number = 0;  

  constructor(
    private service: LegacySmtpClient,
    private host: string,
    private port: number,
  ) 
  {
    if (host.trim().length === 0 || port < 1) throw new Error ("EL host o el port son incorrectos.")
    service.connect(host, port);
  }

  /**
   * Permite cerrar la conexión
   */
  close(): void {
    this.service.disconnect();
  }

  /**
   * Permite enviar un mensaje
   * @param message mensaje a enviar
   * @returns devuelve el estado de la operacion
   */
  send(message: EmailMessage): EmailResult {
    if (message[0].trim().length === 0 ||
        message[3].length === 0) throw new Error ("Los datos del email son erroneos");
    const messageId = `${timeStamp}${this.counter}`;
    const to: string = message[3].join(';');
    const numStatus: number = this.service.sendRaw(message[0], to, message[1], message[2], message[4]);
    let status: EmailStatus = "pendiente";
    switch (numStatus) {
      case 0:
        status = "enviado";
        break;
      case 1:
        status = "fallido";
        break;
      case 2:
        status = "pendiente";
        break
    }
    this.counter++;
    this.correosEnviados.push([messageId, status, message[3]]);
    return [messageId, status, message[3]];
  }

  /**
   * Permite enviar un grupo de mensajes
   * @param messages mensajes a enviar
   * @returns devuelve un array de resultados de cada operacion
   */
  sendBulk(messages: EmailMessage[]): EmailResult[] {
    if (messages.length === 0) throw new Error ("No hay mensajes para enviar");
    let result: EmailResult[] = [];
    messages.forEach(item => {
      const eResult = this.send(item);
      //if (eResult[1] === "enviado")
        result.push(eResult);
    });
    return result;
  }

  /**
   * Dado un id retorna el estado del mensaje
   * @param messageId id del mensaje a encontrar
   * @returns retorna el estado de la operación
   */
  getStatus(messageId: string): EmailStatus {
    const email = this.correosEnviados.filter(c => c[0] === messageId);
    if (email.length === 0) console.log("EmailStatus.Failed: No se encontro el correo")
    return email[0][1];
  }

  /**
   * Permite filtrar un grupo de mensajes por su estado
   * @param status estado por el cual se filtra
   * @returns devuelve un array con los resultados de los mensajes
   */
  filter(status: EmailStatus): EmailResult[] {
    return this.correosEnviados.filter(c => c[1] === status);
  }


}