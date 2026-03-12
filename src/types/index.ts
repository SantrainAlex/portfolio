/* ============================================
   Types partagés — Portfolio Alexis Santrain
   ============================================ */

export type SkillCategory = 'frontend' | 'backend' | 'tools'

export interface Skill {
  name: string
  category: SkillCategory
}

export interface SkillGroup {
  category: SkillCategory
  label: string
  icon: string
  skills: Skill[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  type?: string
  description: string
  technologies?: string[]
}

export interface Education {
  id: string
  degree: string
  level: string
  school: string
  location: string
  period: string
  note?: string
}

export interface Project {
  id: string
  title: string
  context: string
  role: string
  description: string
  technologies: string[]
  period: string
}

export interface ContactInfo {
  email: string
  phone: string
  phoneHref: string
  linkedin: string
  cvPath: string
}
