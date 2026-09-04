import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { projectsData } from '../../data/projects';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { MapPin, ArrowRight, Zap, ExternalLink } from 'lucide-react';

export default function FeaturedProjects({ onNavigate }) {
  // Select 3 standout projects
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Execution Track Record"
            title="Building Renewable Energy Infrastructure"
            highlight="Renewable Energy"
            subtitle="Explore how Volga Solar Solutions designs, deploys, and stewards benchmark solar generation assets nationwide."
            align="left"
            className="max-w-2xl"
          />
          <Button
            variant="outline"
            size="md"
            icon={ArrowRight}
            onClick={() => onNavigate('projects')}
            className="self-start md:self-end shrink-0"
          >
            View All Projects
          </Button>
        </div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-surface border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium mb-2">
                    <div className="flex items-center gap-1.5 text-muted">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      <span>{project.location}</span>
                    </div>
                    <span className="font-mono font-bold text-primary">{project.capacity}</span>
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-body leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-muted block text-[11px]">Generation</span>
                      <span className="font-bold text-heading">{project.annualGen}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-muted block text-[11px]">Carbon Abated</span>
                      <span className="font-bold text-emerald-600">{project.co2Reduction}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Project Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
