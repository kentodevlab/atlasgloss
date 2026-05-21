import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Atlas Gloss — Premium Hand Car Wash · Houston, TX'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(weight: number, text: string): Promise<ArrayBuffer> {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&text=${encodeURIComponent(text)}&display=swap`,
      { next: { revalidate: 86400 } },
    )
  ).text()
  const match = css.match(/url\(([^)]+)\)/)
  if (!match) throw new Error('Could not find font URL')
  const resp = await fetch(match[1])
  return resp.arrayBuffer()
}

export default async function Image() {
  const headingText = 'Atlas Gloss'
  const bodyText = 'Premium Hand Car Wash · Houston, TX · From $29 · (346) 978-7617 · www.atlasgloss.com'

  const [fontBold, fontMedium] = await Promise.all([
    loadFont(700, headingText),
    loadFont(500, bodyText),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A1426 0%, #15203D 50%, #0F1B30 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
            transform: 'translate(100px, -100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
            transform: 'translate(-80px, 80px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              fontFamily: 'Manrope',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Atlas Gloss
          </div>
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#94A3B8',
              fontFamily: 'Manrope',
              lineHeight: 1.4,
              textAlign: 'center',
            }}
          >
            Premium Hand Car Wash
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: '#64748B',
              fontFamily: 'Manrope',
              lineHeight: 1.4,
              textAlign: 'center',
            }}
          >
            Houston, TX  ·  From $29  ·  (346) 978-7617
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#2563EB',
              fontFamily: 'Manrope',
              lineHeight: 1.4,
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            www.atlasgloss.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Manrope', data: fontBold, weight: 700, style: 'normal' },
        { name: 'Manrope', data: fontMedium, weight: 500, style: 'normal' },
      ],
    },
  )
}
