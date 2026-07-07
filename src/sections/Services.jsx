import React from 'react';
import './Services.css';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { 
  BarChart3, 
  Tractor, 
  Beef, 
  LineChart, 
  ClipboardCheck, 
  Users 
} from 'lucide-react';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Administración Rural',
    description: 'Gestión integral del establecimiento, optimizando recursos y organizando la información para la toma de decisiones.'
  },
  {
    icon: Tractor,
    title: 'Planificación Agrícola',
    description: 'Diseño de rotaciones, elección de cultivos, cálculo de insumos y seguimiento técnico de cada lote.'
  },
  {
    icon: Beef,
    title: 'Gestión Ganadera',
    description: 'Manejo de rodeos, planificación forrajera, sanidad y evaluación de índices productivos.'
  },
  {
    icon: BarChart3,
    title: 'Presupuestos',
    description: 'Elaboración de presupuestos financieros y económicos para cada campaña, con control de desvíos.'
  },
  {
    icon: LineChart,
    title: 'Evaluación Económica',
    description: 'Análisis de rentabilidad por cultivo y por establecimiento. Reportes periódicos para el propietario.'
  },
  {
    icon: Users,
    title: 'Coordinación',
    description: 'Gestión de personal propio, contratistas y proveedores para garantizar el correcto desarrollo de las labores.'
  }
];

const Services = () => {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Brindamos soluciones integrales adaptadas a las necesidades específicas de cada establecimiento, enfocándonos en la rentabilidad y sustentabilidad."
        />
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
