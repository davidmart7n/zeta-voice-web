# Assets de landing

## En uso

| Archivo | Uso |
|---------|-----|
| `foto-david.jpg` · `foto-adri.jpg` | Retratos individuales (`founders.members`) |
| `adri-y-david.jpeg` | Foto en equipo (`founders.teamImageSrc`) |
| `client-hub.svg` | Hero (`hero.imageSrc`) — placeholder; sustituir por `client-hub.png` con captura real del hub |

## Opcional — captura real de Zeta App

1. Exportar captura móvil como **`zeta-app-mobile.png`** en esta carpeta.
2. En `landing-data.ts`:
   ```ts
   export const appMockupScreenshotSrc = "/landing/zeta-app-mobile.png";
   ```
3. `PhoneMockup` mostrará la imagen dentro del marco; sin `screenshotSrc` se usa el mockup decorativo (notificación + botón Aprobar).

## Reemplazar hero por captura real

1. Añadir **`client-hub.png`** (captura del dashboard).
2. En `landing-data.ts`, cambiar `hero.imageSrc` a `"/landing/client-hub.png"`.
