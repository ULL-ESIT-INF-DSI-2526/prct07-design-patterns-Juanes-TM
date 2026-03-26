/**
 * Define el estado de un email
 */
export type EmailStatus = "enviado" | "fallido" | "pendiente";

/**
 * Define a un email
 */
export type EmailMessage = [string, string, string, string[], boolean] //from, subject, body, to, isHtml

/**
 * Define el resultado de enviar un email
 */
export type EmailResult = [string, EmailStatus, string[]] //messageId, status, recipients