import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

interface ParticlesProps {
  className?: string
  quantity?: number
  color?: string
  lineColor?: string
  maxDistance?: number
}

export default function Particles({
  className,
  quantity = 70,
  color = 'rgba(255,255,255,0.7)',
  lineColor = 'rgba(255,255,255,0.25)',
  maxDistance = 120,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const cnvMaybe = canvasRef.current
    if (!cnvMaybe) return
    const cnv = cnvMaybe as HTMLCanvasElement

    const ctx = cnv.getContext('2d', { alpha: true }) as CanvasRenderingContext2D

    let width = 0
    let height = 0
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    const particles: Particle[] = []

    function setCanvasSize() {
      const parent = cnv.parentElement
      const rect = parent?.getBoundingClientRect()
      width = Math.floor(rect?.width ?? window.innerWidth)
      height = Math.floor(rect?.height ?? 300)
      cnv.width = Math.floor(width * dpr)
      cnv.height = Math.floor(height * dpr)
      cnv.style.width = `${width}px`
      cnv.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function createParticles() {
      particles.length = 0
      const baseQty = Math.floor((width * height) / 11000)
      const total = Math.min(quantity, baseQty + Math.floor(quantity / 2))
      for (let i = 0; i < total; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 1.6 + 0.6,
        })
      }
    }

    function update() {
      ctx.clearRect(0, 0, width, height)

      // Move and draw points
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -5) p.x = width + 5
        else if (p.x > width + 5) p.x = -5
        if (p.y < -5) p.y = height + 5
        else if (p.y > height + 5) p.y = -5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }

      // Lines between close points
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            const stroke = lineColor.startsWith('rgba')
              ? lineColor.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, (_m, r, g, b_) => `rgba(${r},${g},${b_},${alpha.toFixed(3)})`)
              : lineColor
            ctx.strokeStyle = stroke as string
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(update)
    }

    function handleResize() {
      setCanvasSize()
      createParticles()
    }

    setCanvasSize()
    createParticles()
    update()

    const ro = new ResizeObserver(handleResize)
    if (cnv.parentElement) ro.observe(cnv.parentElement)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      ro.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [quantity, color, lineColor, maxDistance])

  return <canvas ref={canvasRef} className={className} aria-hidden />
}
