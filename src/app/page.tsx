import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="container" style={{ padding: "4rem 2rem" }}>
      {/* Hero Section */}
      <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
        <p className="text-muted animate-fade-in-up delay-100" style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "1rem" }}>
          Olá, meu nome é Eneri Junior
        </p>
        <h1 className="heading-1 animate-fade-in-up delay-200">
          Eu crio <span className="text-gradient">Soluções</span> Automatizadas.
        </h1>
        <p className="text-muted animate-fade-in-up delay-300" style={{ maxWidth: "650px", marginTop: "1.5rem", fontSize: "1.125rem" }}>
          Engenheiro de Qualidade (QA) e Desenvolvedor Java Júnior focado em automação de testes de backend, integração contínua e total dedicação em garantir a confiabilidade de software.
        </p>
        
        <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: "1rem", marginTop: "3rem", flexWrap: "wrap" }}>
          <a href="#demonstracoes" className="btn-primary">
            Ver Meus Testes
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
          <a href="https://github.com/jrcosta" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Perfil no GitHub
          </a>
        </div>
      </section>

      {/* Experience & Skills Summary */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid var(--border)" }}>
        <h2 className="heading-2">Minhas Habilidades</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          
          <div className="glass-card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Automação de Testes de API</h3>
            <p className="text-muted">Amplo domínio em Java 21, RestAssured e JUnit 5 para forte validação de backend, verificação de schema e regras de negócios.</p>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Testes E2E de Interfaces Web</h3>
            <p className="text-muted">Criação de suítes escaláveis em Cypress e Selenium para simular jornadas complexas de usuários reais e identificar falhas em fluxos visuais.</p>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>DevOps & CI/CD</h3>
            <p className="text-muted">Integração contínua e pipelines usando GitHub/GitLab Actions, gerando incríveis Relatórios Interativos no Allure para feedbacks contínuos da equipe.</p>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Testes de Performance & Carga</h3>
            <p className="text-muted">Desenvolvimento de cenários de stress, carga e escalabilidade utilizando k6 e/ou JMeter, garantindo a resiliência do sistema sob alto tráfego concorrente.</p>
          </div>

        </div>
      </section>

      {/* Demonstrations Section */}
      <section id="demonstracoes" style={{ padding: "6rem 0", borderTop: "1px solid var(--border)" }}>
        <h2 className="heading-2">Laboratórios de Automação</h2>
        <p className="text-muted" style={{ marginBottom: "3rem" }}>Exemplos reais de ferramentas de automação inseridas no monorepo deste portfólio.</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* Card 1 */}
          <div className="glass-card" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
            <div style={{ flex: "1 1 400px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ background: "rgba(99, 102, 241, 0.2)", color: "var(--primary)", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem", fontWeight: 600 }}>Backend</span>
                <h3 style={{ fontSize: "1.5rem" }}>Testes de API RestAssured (Swapi)</h3>
              </div>
              <p className="text-muted">
                Um pacote robusto de testes automatizados para validar a Star Wars API (SWAPI), incluindo o padrão AAA, modelagem por POJOs e validação profunda com Java 21 e RestAssured.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
                <span className="text-muted" style={{ fontSize: "0.875rem", background: "var(--secondary)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>Java 21</span>
                <span className="text-muted" style={{ fontSize: "0.875rem", background: "var(--secondary)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>RestAssured</span>
                <span className="text-muted" style={{ fontSize: "0.875rem", background: "var(--secondary)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>JUnit 5</span>
              </div>
            </div>
            
            <div style={{ flex: "0 0 auto", alignSelf: "flex-end", display: "flex", gap: "1rem" }}>
               <Link href="https://github.com/jrcosta/portifolio-automacao-api-restassured" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                 Ver Código
               </Link>
               <Link href="https://jrcosta.github.io/portifolio-automacao-api-restassured/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                 Visualizar Allure Report
               </Link>
            </div>
          </div>
          
          {/* Placeholder for future E2E */}
          <div className="glass-card" style={{ opacity: 0.6, borderStyle: "dashed" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(20, 184, 166, 0.2)", color: "var(--accent)", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem", fontWeight: 600 }}>Frontend E2E</span>
              <h3 style={{ fontSize: "1.5rem" }}>Testes E2E com Cypress (Em Breve)</h3>
            </div>
            <p className="text-muted">
              Automação completa (End-to-End) de interfaces pelo navegador para validar fluxos web modernos. O workspace encontra-se na respectiva pasta <code>/demonstracoes/e2e-cypress</code> aguardando implementação.
            </p>
          </div>

          {/* Placeholder for Load Testing */}
          <div className="glass-card" style={{ opacity: 0.6, borderStyle: "dashed" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(239, 68, 68, 0.2)", color: "#ef4444", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem", fontWeight: 600 }}>Performance</span>
              <h3 style={{ fontSize: "1.5rem" }}>Testes de Carga com k6 (Em Breve)</h3>
            </div>
            <p className="text-muted">
              Simulação de uso massivo com injeção virtual de usuários para descobrir gargalos e validar SLAs da aplicação. Workspace em <code>/demonstracoes/load-testing-k6</code> aguardando scripts.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "3rem 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <p className="text-muted" style={{ fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Eneri Junior. Construído dinamicamente com Next.js.
        </p>
      </footer>
    </main>
  );
}
