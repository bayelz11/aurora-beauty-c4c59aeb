import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/aurora-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurora Beauty — Encanto, Estilo e Delicadeza" },
      {
        name: "description",
        content:
          "Aurora Beauty é um salão de beleza sofisticado e acolhedor. Cabelo, unhas, estética e bem-estar em um só lugar.",
      },
      { property: "og:title", content: "Aurora Beauty — Salão de Beleza" },
      {
        property: "og:description",
        content:
          "Encanto, estilo e delicadeza. Conheça o salão Aurora Beauty.",
      },
      { property: "og:image", content: logo.url },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600&display=swap",
      },
      { rel: "icon", href: logo.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="aurora-site">
      <header className="aurora-header">
        <div className="aurora-container aurora-nav">
          <a href="#top" className="aurora-brand">
            <img src={logo.url} alt="Aurora Beauty" />
            <span>Aurora Beauty</span>
          </a>
          <nav>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <a href="#contato" className="aurora-btn aurora-btn-outline">Agendar</a>
        </div>
      </header>

      <main id="top">
        <section className="aurora-hero">
          <div className="aurora-container aurora-hero-grid">
            <div className="aurora-hero-copy">
              <span className="aurora-eyebrow">Encanto · Estilo · Delicadeza</span>
              <h1>
                Sua beleza,<br />
                <em>cuidada com arte.</em>
              </h1>
              <p>
                No Aurora Beauty unimos técnica, acolhimento e um ambiente
                pensado nos mínimos detalhes para você sair daqui se sentindo
                renovada — por dentro e por fora.
              </p>
              <div className="aurora-hero-cta">
                <a href="#contato" className="aurora-btn aurora-btn-primary">Agendar horário</a>
                <a href="#servicos" className="aurora-btn aurora-btn-ghost">Ver serviços →</a>
              </div>
            </div>
            <div className="aurora-hero-logo">
              <img src={logo.url} alt="Logo Aurora Beauty" />
            </div>
          </div>
        </section>

        <section id="servicos" className="aurora-section">
          <div className="aurora-container">
            <div className="aurora-section-head">
              <span className="aurora-eyebrow">Serviços</span>
              <h2>Cuidado completo, do fio à ponta dos dedos</h2>
            </div>
            <div className="aurora-services">
              {[
                { t: "Cabelo", d: "Cortes, coloração, hidratação profunda e finalizações sob medida." },
                { t: "Manicure & Pedicure", d: "Esmaltação tradicional, em gel e spa dos pés com toque relaxante." },
                { t: "Sobrancelhas & Cílios", d: "Design natural, henna, brow lamination e extensão de cílios." },
                { t: "Estética Facial", d: "Limpeza de pele, peelings suaves e protocolos de viço." },
                { t: "Maquiagem", d: "Make do dia, social e noivas — com prova e acompanhamento." },
                { t: "Dia da Noiva", d: "Experiência exclusiva, com café, espumante e atendimento dedicado." },
              ].map((s) => (
                <article key={s.t} className="aurora-service-card">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="aurora-section aurora-section-alt">
          <div className="aurora-container aurora-about">
            <div>
              <span className="aurora-eyebrow">Sobre</span>
              <h2>Um espaço pensado para o seu bem-estar</h2>
              <p>
                O Aurora Beauty nasceu do desejo de criar um salão onde
                sofisticação caminha lado a lado com aconchego. Nossa equipe é
                formada por profissionais apaixonados pelo que fazem, sempre
                em atualização para entregar resultados naturais e elegantes.
              </p>
              <p>
                Acreditamos que cuidar de si é um ritual — e que cada visita
                deve ser um momento só seu.
              </p>
            </div>
            <ul className="aurora-pillars">
              <li><strong>+8 anos</strong><span>de experiência</span></li>
              <li><strong>15</strong><span>profissionais especializados</span></li>
              <li><strong>4.9★</strong><span>avaliação das clientes</span></li>
            </ul>
          </div>
        </section>

        <section id="galeria" className="aurora-section">
          <div className="aurora-container">
            <div className="aurora-section-head">
              <span className="aurora-eyebrow">Galeria</span>
              <h2>Trabalhos recentes</h2>
            </div>
            <div className="aurora-gallery">
              <div className="g1" /><div className="g2" /><div className="g3" />
              <div className="g4" /><div className="g5" /><div className="g6" />
            </div>
          </div>
        </section>

        <section id="contato" className="aurora-section aurora-section-cta">
          <div className="aurora-container aurora-cta">
            <div>
              <span className="aurora-eyebrow">Contato</span>
              <h2>Vamos marcar o seu horário?</h2>
              <p>Atendemos de terça a sábado, com horário marcado.</p>
            </div>
            <ul className="aurora-contact">
              <li><strong>WhatsApp</strong><span>(11) 99999-0000</span></li>
              <li><strong>Endereço</strong><span>Rua das Flores, 123 — São Paulo</span></li>
              <li><strong>Horário</strong><span>Ter–Sáb · 9h às 19h</span></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="aurora-footer">
        <div className="aurora-container">
          <p>© {new Date().getFullYear()} Aurora Beauty · Encanto, estilo e delicadeza.</p>
        </div>
      </footer>
    </div>
  );
}
