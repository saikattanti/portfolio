export const handleEmailClick = (email: string) => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Open in native mail app
      window.location.href = `mailto:${email}`;
    } else {
      // Open in Gmail web for desktop
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    }
  };