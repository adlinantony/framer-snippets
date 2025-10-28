"use client"
import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = {
    label?: string
}

// Project document mappings
const projectDocuments = {
    selvara: {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%201%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%201%20floor%20plan.pdf",
    },
    "selvara-3": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%203%20%20brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%203%20floor%20plan.pdf",
    },
    "selvara-4": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%204%20%20brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Selvara%204%20floor%20plan.pdf",
    },
    montura: {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%20floor%20plan.pdf",
    },
    "montura-2": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%202%20%20floor%20plan.pdf",
    },
    "montura-3": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Montura%203%20%20floor%20plan.pdf",
    },
    "chevalia-fields": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Fields%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Fields%20floor%20plans.pdf",
    },
    "chevalia-estate": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Estate%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Estate%201%20floor%20plan.pdf",
    },
    "chevalia-estate-2": {
        brochure:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Estate%20Brochure.pdf",
        floorPlan:
            "https://lqa1szappspr7ean.public.blob.vercel-storage.com/files/Chevalia%20Estate%202%20floor%20plan.pdf",
    },

    "palmiera-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/vZaYe87HPXUwzNoY2qzmaa3t1Ls.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/XWwVcIGHkJzoTf9vAbOlaz0tg.pdf",
    },
    "palmiera-2-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/tnHVdq3ReKHrAT7gyXnajcgxCjI.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/miWNdNehLkZmOCLEFwCfbnE6ho.pdf",
    },
    "palmiera-3-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/bne3Ez0XjhJLZ51nNLZqVH6AA1E.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/tfY5fHQ2Kve2CoOw9IPRs9x8NeQ.pdf",
    },
    "mirage-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/ct5zcBS21qGajf3zt9kSCDF9Zs.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/W1ZeYY5U3GgCGCadbJZjpkKoGHQ.pdf",
    },
    "lavita-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/qPYU2kv06wPT6UBxa0BCp8WN8I.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/19W7rckZwf0zrlDyBEjwarK0ow.pdf",
    },
    "address-villas-tierra-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/qqKKCHhqTvuOpdnW1IOnpgl3WCI.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/umZelqXFNqflBy0bENABOoexq8g.pdf",
    },
    "palace-villas-ostra-at-the-oasis": {
        brochure:
            "https://framerusercontent.com/assets/HURoYTdwcieN4Kn8lhrEw03o.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/i63DC41u1jDiZELFeDRPt9Eq3yg.pdf",
    },
    "riwa-at-madinat-jumeirah-living": {
        brochure:
            "https://framerusercontent.com/assets/LPhWqNqD2dtltbYt6NuX9E0t9c.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/ZsLLGQFOvsQHPj2isz3w9apKYo.pdf",
    },
    "elara-at-madinat-jumeirah-living": {
        brochure:
            "https://framerusercontent.com/assets/PGFDGmRL10XoTegaGePVXFweibI.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/CgRHgQC2hMD80ALJQsLFe84DP0.pdf",
    },
    "jomana-at-madinat-jumeirah-living": {
        brochure:
            "https://framerusercontent.com/assets/xnL616abr2Z5RljBS1rzXtuOgA.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/C3qYJitDrEyaq5jehqU7yNJqw.pdf",
    },
    "madinat-jumeirah-living-residences": {
        brochure:
            "https://framerusercontent.com/assets/42qUEC7vfYZR0Ui8TqWDRfjeakc.zip",
        floorPlan:
            "https://framerusercontent.com/assets/JRERRzDXyn3bsWx7aT4cFgVwU.zip",
    },
    "nourelle-at-madinat-jumeirah-living": {
        brochure:
            "https://framerusercontent.com/assets/u6MWtmXBlb180V441yw2yINR0.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/LPDki9FtkelHk1HaglaSjszBsNk.pdf",
    },
    "crestlane-at-city-walk": {
        brochure:
            "https://framerusercontent.com/assets/tMR3ZY1MsdmBtePk52eVBkRVm8w.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/0q4msicB1SGvco3v0ymqXilcsYU.pdf",
    },
    "central-park-at-city-walk": {
        brochure:
            "https://framerusercontent.com/assets/oZz7F0NNh4oCrz0yIxvJppHI6f8.zip",
        floorPlan:
            "https://framerusercontent.com/assets/NHhZvs8mMZvMUGjrC272gRlqk.zip",
    },
    "northline-at-city-walk": {
        brochure:
            "https://framerusercontent.com/assets/rXoIAvM9TDWF5Y8ErHzP4Bmj3Sc.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/GTCV5WuXZkfFUn9lahEJda70E.pdf",
    },
    "verve-at-city-walk": {
        brochure:
            "https://framerusercontent.com/assets/d4dckD8aVY81GpCf0KxUgoaV324.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/QyMS52ODcfq0PfC7qTnVyWEPv4.pdf",
    },
    "bluewaters-residences-at-bluewaters-island": {
        brochure:
            "https://framerusercontent.com/assets/mH5cZZnSgOrVV8pCU4UiAJ8MS8.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/yKmCtqr39NB93koGwx6zE7qUsKY.pdf",
    },
    "bluewaters-bay-at-bluewaters-island": {
        brochure:
            "https://framerusercontent.com/assets/QEz4H1IqNSw5ZTCM53yi7LwqK7M.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/X1m47j6nz4lL2MgTCzm3SaeSjw.pdf",
    },
    "parkwood-at-dubai-hills-estate": {
        brochure:
            "https://framerusercontent.com/assets/bbLNutaHojHXhXVuTJ0kRgJ0IM.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/lMYcSsDlEn6Hr2uzCeiGXXBg00.pdf",
    },
    rosehill: {
        brochure:
            "https://framerusercontent.com/assets/SE6dMkqoxl5vXuVcplJoHPjNZE.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/D4zukKBqsgyeja6Ceto28iVs.pdf",
    },
    "vida-residences-hillside": {
        brochure:
            "https://framerusercontent.com/assets/ul7QJ5V1EAB6SHTuc9VWaFPt4k.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/LUn9MsGo6Wq1RZsrlRk1UikYA.pdf",
    },
    "park-gate-at-dubai-hills-estate": {
        brochure:
            "https://framerusercontent.com/assets/Vvx5nrIlprA41DhAZrdqthufA.pdf",
        floorPlan:
            "https://framerusercontent.com/assets/T8o6cRlctUHbmoE1YnfG9wnDAEk.pdf",
    },
}
export default function DownloadButton({ label = "Download File" }: Props) {
    const [projectSlug, setProjectSlug] = React.useState<string | null>(null)

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const pathname = window.location.pathname
            const slugMatch = pathname.match(/\/([^\/]+)\/thank-you-download/)
            if (slugMatch) {
                setProjectSlug(slugMatch[1])
            }
        }
    }, [])

    const documents = projectSlug
        ? projectDocuments[projectSlug as keyof typeof projectDocuments]
        : null

    const brochureUrl = documents?.brochure
    const floorPlanUrl = documents?.floorPlan

    // ✅ Convert slug to readable name
    const formatSlug = (slug: string) =>
        slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())

    // ✅ Extract file extension from URL
    const getFileExtension = (url: string) => {
        const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/)
        return match ? match[1] : "pdf" // default fallback
    }

    // ✅ Generate file name with correct extension
    const generateFileName = (slug: string, type: string, url: string) => {
        const formatted = formatSlug(slug)
        const ext = getFileExtension(url)
        return `${formatted} - ${type}.${ext}`
    }

    // ✅ Detect iOS Safari
    const isIOSSafari = () => {
        const ua = window.navigator.userAgent
        return (
            /iP(ad|hone|od)/.test(ua) &&
            /Safari/.test(ua) &&
            !/CriOS|FxiOS|EdgiOS/.test(ua)
        )
    }

    // ✅ Universal download handler
    const handleDownload = async (fileUrl: string, fileType: string) => {
        if (!fileUrl || !projectSlug) {
            console.error(`${fileType} URL not found for project:`, projectSlug)
            return
        }

        const fileName = generateFileName(projectSlug, fileType, fileUrl)

        try {
            // if (isIOSSafari()) {
            //     window.open(fileUrl, "_blank")
            //     return
            // }

            const response = await fetch(fileUrl, { mode: "cors" })
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = fileName
            link.click()
            window.URL.revokeObjectURL(url)
        } catch (err) {
            console.error(`${fileType} download failed`, err)
        }
    }

    const buttonStyle: React.CSSProperties = {
        flex: "1",
        padding: "12px 16px",
        backgroundColor: "#3C96CF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "lato, sans-serif",
        borderRadius: "6px",
        textAlign: "center",
        minWidth: "204px",
    }

    return (
        <>
            <style>
                {`
                @media (max-width: 768px) {
                    .download-buttons {
                        flex-direction: column !important;
                        gap: 10px !important;
                    }
                    .download-button {
                        width: 100% !important;
                        flex: none !important;
                    }
                }
                `}
            </style>

            <div
                className="download-buttons"
                style={{
                    display: "flex",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <div
                    className="download-button"
                    onClick={() =>
                        floorPlanUrl &&
                        handleDownload(floorPlanUrl, "Floor Plan")
                    }
                    style={{
                        ...buttonStyle,
                        cursor: floorPlanUrl ? "pointer" : "not-allowed",
                    }}
                >
                    Download Floor Plans
                </div>

                <div
                    className="download-button"
                    onClick={() =>
                        brochureUrl && handleDownload(brochureUrl, "Brochure")
                    }
                    style={{
                        ...buttonStyle,
                        cursor: brochureUrl ? "pointer" : "not-allowed",
                    }}
                >
                    Download Brochure
                </div>
            </div>
        </>
    )
}

// Expose props in Framer UI
addPropertyControls(DownloadButton, {
    label: {
        type: ControlType.String,
        title: "Label",
        defaultValue: "Download File",
    },
})
