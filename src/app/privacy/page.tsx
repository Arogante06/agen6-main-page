import { Container } from "@/components/common/Container";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12">
      <Container maxWidth="lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                <strong>Última actualización:</strong> 27 de noviembre de 2025
              </p>
              
              <p className="mb-6">
                En A GEN - Soluciones de Nueva Generación ("nosotros", "nos", "nuestro"), nos comprometemos a proteger su privacidad. 
                Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando utiliza 
                nuestros servicios de automatización, integración e inteligencia artificial.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
              
              <h3 className="text-xl font-semibold mb-3">1.1 Información que usted nos proporciona</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Información de cuenta: nombre, dirección de correo electrónico, número de teléfono</li>
                <li>Información de la empresa: nombre de la empresa, industria, tamaño de la empresa</li>
                <li>Información de configuración de servicios y preferencias</li>
                <li>Comunicaciones que nos envía</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Información recopilada automáticamente</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos de uso de nuestros servicios y plataformas</li>
                <li>Información del dispositivo (dirección IP, navegador, sistema operativo)</li>
                <li>Cookies y tecnologías similares</li>
                <li>Registros de actividad y métricas de rendimiento</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Información de terceros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos de integraciones con plataformas como GoHighLevel (GHL)</li>
                <li>Información de APIs de terceros que usted autoriza</li>
                <li>Datos de herramientas de análisis y marketing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Uso de Google OAuth y APIs</h2>
              
              <p className="mb-4">
                Utilizamos Google OAuth para facilitar el acceso seguro a nuestros servicios. Al autorizar el acceso 
                a través de Google OAuth:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Accedemos únicamente a la información básica de perfil necesaria para la autenticación</li>
                <li>No almacenamos credenciales de Google en nuestros sistemas</li>
                <li>Cumplimos estrictamente con las Políticas de Datos de Usuario de la API de Google</li>
                <li>Utilizamos el acceso mínimo necesario para proporcionar nuestros servicios</li>
                <li>No vendemos, alquilamos o compartimos datos obtenidos a través de Google APIs con terceros para fines publicitarios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Cómo Utilizamos su Información</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar, mantener y mejorar nuestros servicios de automatización e IA</li>
                <li>Procesar transacciones y enviar comunicaciones relacionadas</li>
                <li>Personalizar su experiencia y recomendaciones</li>
                <li>Proporcionar soporte al cliente y asistencia técnica</li>
                <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Desarrollar nuevos productos y servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Compartir Información</h2>
              
              <p className="mb-4">No vendemos su información personal. Podemos compartir información en las siguientes circunstancias:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Con terceros que nos ayudan a operar nuestros servicios</li>
                <li><strong>Integraciones autorizadas:</strong> Con plataformas que usted específicamente autoriza</li>
                <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger derechos legales</li>
                <li><strong>Transferencias comerciales:</strong> En caso de fusión, adquisición o venta de activos</li>
                <li><strong>Consentimiento:</strong> Con su consentimiento explícito para otros fines</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Seguridad de Datos</h2>
              
              <p className="mb-4">Implementamos medidas de seguridad técnicas, físicas y administrativas apropiadas para proteger su información:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido basado en roles</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Protección contra acceso no autorizado, alteración o destrucción</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Sus Derechos</h2>
              
              <p className="mb-4">Dependiendo de su ubicación, puede tener los siguientes derechos:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Solicitar acceso a su información personal</li>
                <li><strong>Rectificación:</strong> Solicitar corrección de información inexacta</li>
                <li><strong>Eliminación:</strong> Solicitar eliminación de su información personal</li>
                <li><strong>Portabilidad:</strong> Solicitar una copia de sus datos en formato portable</li>
                <li><strong>Restricción:</strong> Solicitar limitación del procesamiento</li>
                <li><strong>Objeción:</strong> Oponerse al procesamiento de sus datos</li>
                <li><strong>Revocación:</strong> Retirar consentimiento previamente otorgado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
              
              <p className="mb-4">
                Retenemos su información personal solo durante el tiempo necesario para cumplir con los fines 
                descritos en esta política, a menos que se requiera o permita un período de retención más largo por ley.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Transferencias Internacionales</h2>
              
              <p className="mb-4">
                Sus datos pueden ser transferidos y procesados en países diferentes a su país de residencia. 
                Implementamos salvaguardas apropiadas para proteger sus datos en estas transferencias.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Menores de Edad</h2>
              
              <p className="mb-4">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente 
                información personal de menores de 18 años sin consentimiento parental verificable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Cambios a esta Política</h2>
              
              <p className="mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios 
                materiales mediante un aviso prominente en nuestro sitio web o por correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Contacto</h2>
              
              <p className="mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o el manejo de sus datos personales, contáctenos:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>A GEN - Soluciones de Nueva Generación</strong></p>
                <p className="mb-2">Email: privacy@agen.com</p>
                <p className="mb-2">Teléfono: +1 (555) 123-4567</p>
                <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                Esta Política de Privacidad complementa cualquier otro aviso de privacidad que podamos proporcionarle 
                en relación con servicios específicos.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}