import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgb(252, 165, 165)',
                        width: 26,
                        height: 17,
                        transform: 'rotate(-45deg)',
                        borderRadius: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgb(248, 113, 113)',
                            borderRadius: '20%',
                            width: 15,
                            height: 9,
                        }} />
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}