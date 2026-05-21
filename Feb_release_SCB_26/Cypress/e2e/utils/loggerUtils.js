function formatMessage(level, message) {
    return `${new Date().toISOString()} [${level.toUpperCase()}]: ${message}`;
  }
  
  export const logger = {
    log(message) {
      console.log(formatMessage('info', message));
    },
  
    info(message) {
      console.info(formatMessage('info', message));
    },
  
    warn(message) {
      console.warn(formatMessage('warn', message));
    },
  
    error(message) {
      console.error(formatMessage('error', message));
    },
  
    fileLog(level, message) {
      cy.task('logMessage', { level, message: formatMessage(level, message) });
    },
  };
  