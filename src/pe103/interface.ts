import { EmailStatus, EmailMessage, EmailResult } from "./types";

/**
 * Interfaz que define los método para implementar un servicio de email
 */
export interface EmailService {
  /**
   * Método que permite enviar un email
   * @param message email a enviar.
   */
  send(message: EmailMessage): EmailResult;

  /**
   * Método que permite enviar emails masivamente
   * @param messages 
   */
  sendBulk(messages: EmailMessage[]): EmailResult[];

  /**
   * Método que muestra el estado de un email
   * @param messageId 
   */
  getStatus(messageId: string): EmailStatus;
}