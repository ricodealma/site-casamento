import React, { ReactNode } from 'react'
import './Section.module.scss'

interface SectionProps {
  id: string,
  classes?: string,
  titulo?: string,
  children: ReactNode
}
function Section({ id, classes, titulo, children }: SectionProps) {
  return (
    <section id={id} className={classes}>
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

export default Section