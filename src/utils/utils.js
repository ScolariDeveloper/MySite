export const calculateShadowAndRotation = (mouseX, mouseY, cardWidth, cardHeight) => {
    const mouseXPercent = (mouseX / cardWidth) * 2 - 1; // Percentuale di posizione del mouse rispetto al centro sull'asse X (-1 a 1)
    const mouseYPercent = (mouseY / cardHeight) * 2 - 1; // Percentuale di posizione del mouse rispetto al centro sull'asse Y (-1 a 1)

    const maxOffset = 30; // Massimo offset dell'ombra
    const shadowOffsetX = mouseXPercent * maxOffset;
    const shadowOffsetY = mouseYPercent * maxOffset;

    const maxBlur = 50; // Sfocatura massima
    const minBlur = 10; // Sfocatura minima
    const shadowBlur = minBlur + (1 - Math.abs(mouseYPercent)) * (maxBlur - minBlur);

    const maxOpacity = 0.4; // Opacità massima dell'ombra
    const minOpacity = 0.15; // Opacità minima dell'ombra
    const shadowOpacity = minOpacity + (1 - Math.abs(mouseXPercent)) * (maxOpacity - minOpacity);

    const maxTiltX = 15; // Angolo massimo di inclinazione sull'asse X
    const maxTiltY = 15; // Angolo massimo di inclinazione sull'asse Y

    const rotateXValue = -maxTiltX * mouseYPercent;
    const rotateYValue = maxTiltY * mouseXPercent;

    return { shadowOffsetX, shadowOffsetY, shadowBlur, shadowOpacity, rotateXValue, rotateYValue };
};
