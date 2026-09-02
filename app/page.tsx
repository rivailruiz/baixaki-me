const apps = [
  {
    name: 'UniTV',
    category: 'Streaming',
    description: 'Baixe o aplicativo UniTV diretamente para seu dispositivo Android.',
    version: 'Android',
    size: '39,2 MB',
    mark: 'U',
    tone: 'red',
    downloadUrl: '',
  },
  {
    name: 'Kodi',
    category: 'Entretenimento',
    description: 'Organize e reproduza sua biblioteca de filmes, séries e músicas.',
    version: 'v21.2',
    size: '64 MB',
    mark: 'K',
    tone: 'blue',
    downloadUrl: '',
  },
  {
    name: 'VLC Player',
    category: 'Reprodutor',
    description: 'Assista aos seus vídeos em praticamente qualquer formato.',
    version: 'v3.6',
    size: '42 MB',
    mark: 'V',
    tone: 'orange',
    downloadUrl: '',
  },
  {
    name: 'Plex',
    category: 'Streaming',
    description: 'Sua coleção de mídia reunida e pronta para assistir na TV.',
    version: 'v10.26',
    size: '58 MB',
    mark: 'P',
    tone: 'gold',
    downloadUrl: '',
  },
  {
    name: 'Send Files to TV',
    category: 'Ferramentas',
    description: 'Envie arquivos do celular ou computador direto para a televisão.',
    version: 'v1.3',
    size: '12 MB',
    mark: 'S',
    tone: 'violet',
    downloadUrl: '',
  },
  {
    name: 'Spotify',
    category: 'Música',
    description: 'Ouça músicas, playlists e podcasts na melhor tela da casa.',
    version: 'v9.0',
    size: '79 MB',
    mark: 'S',
    tone: 'green',
    downloadUrl: '',
  },
  {
    name: 'TV Browser',
    category: 'Navegador',
    description: 'Navegue pela internet com uma interface pensada para a TV.',
    version: 'v5.1',
    size: '26 MB',
    mark: 'B',
    tone: 'pink',
    downloadUrl: '',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="site-header container">
          <a className="brand focusable" href="#inicio" aria-label="TV Apps — início">
            <span className="brand-icon" aria-hidden="true">
              <span />
            </span>
            <span>TV<span>Apps</span></span>
          </a>

          <nav aria-label="Navegação principal">
            <a className="nav-link focusable active" href="#inicio">Início</a>
            <a className="nav-link focusable" href="#aplicativos">Aplicativos</a>
            <a className="nav-link focusable" href="#como-instalar">Como instalar</a>
          </nav>

          <a className="header-action focusable" href="#aplicativos">
            Explorar apps
            <span aria-hidden="true">↓</span>
          </a>
        </header>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Downloads simples e diretos
            </div>
            <h1>Seus apps favoritos, <em>direto na TV.</em></h1>
            <p>
              Uma central leve e organizada para baixar os melhores aplicativos
              usando apenas o navegador da sua televisão.
            </p>
            <div className="hero-actions">
              <a className="primary-button focusable" href="#aplicativos">
                Ver aplicativos
                <span aria-hidden="true">→</span>
              </a>
              <a className="text-button focusable" href="#como-instalar">
                Como funciona
              </a>
            </div>
            <div className="hero-trust" aria-label="Características do site">
              <span><b>✓</b> Sem cadastro</span>
              <span><b>✓</b> Navegação fácil</span>
              <span><b>✓</b> Feito para TV</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="tv-shell">
              <div className="tv-camera" />
              <div className="tv-screen">
                <div className="screen-topbar">
                  <span className="screen-brand"><i /> TVApps</span>
                  <span className="screen-avatar">TV</span>
                </div>
                <div className="screen-title">
                  <small>DESCUBRA</small>
                  <strong>Apps para sua TV</strong>
                </div>
                <div className="mini-apps">
                  <div className="mini-app selected"><span className="mini-icon blue">K</span><b>Kodi</b></div>
                  <div className="mini-app"><span className="mini-icon orange">V</span><b>VLC</b></div>
                  <div className="mini-app"><span className="mini-icon green">S</span><b>Spotify</b></div>
                </div>
                <div className="screen-progress"><span /></div>
              </div>
              <div className="tv-stand"><span /></div>
            </div>
            <div className="floating-pill pill-top"><span>↓</span> Download direto</div>
            <div className="floating-pill pill-bottom"><span>✓</span> Pronto para instalar</div>
          </div>
        </div>
      </section>

      <section className="apps-section" id="aplicativos">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">BIBLIOTECA DE APPS</span>
              <h2>Escolha e baixe</h2>
            </div>
            <p>Selecione um aplicativo abaixo para iniciar o download na sua TV.</p>
          </div>

          <div className="app-grid">
            {apps.map((app) => (
              <article className="app-card" key={app.name}>
                <div className={`app-icon ${app.tone}`} aria-hidden="true">
                  {app.mark}
                </div>
                <div className="app-content">
                  <span className="app-category">{app.category}</span>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <div className="app-meta">
                    <span>{app.version}</span>
                    <i />
                    <span>{app.size}</span>
                  </div>
                </div>
                {app.downloadUrl ? (
                  <a className="download-button focusable" href={app.downloadUrl} data-no-cache="true">
                    Baixar <span aria-hidden="true">↓</span>
                  </a>
                ) : (
                  <span className="download-button pending" aria-label={`Link de ${app.name} será adicionado em breve`}>
                    Em breve
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section" id="como-instalar">
        <div className="container how-card">
          <div className="how-copy">
            <span className="section-kicker light">INSTALAÇÃO RÁPIDA</span>
            <h2>Do navegador para a sua TV em poucos passos.</h2>
            <p>Todo o processo foi pensado para funcionar bem com o controle remoto.</p>
          </div>
          <ol className="steps">
            <li><span>1</span><div><b>Escolha o app</b><small>Navegue pelos cards acima</small></div></li>
            <li><span>2</span><div><b>Faça o download</b><small>Confirme o arquivo no navegador</small></div></li>
            <li><span>3</span><div><b>Abra e instale</b><small>Siga as instruções da sua TV</small></div></li>
          </ol>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand footer-brand focusable" href="#inicio">
            <span className="brand-icon" aria-hidden="true"><span /></span>
            <span>TV<span>Apps</span></span>
          </a>
          <p>Uma forma simples de levar seus apps favoritos para a TV.</p>
          <a className="back-top focusable" href="#inicio">Voltar ao topo <span>↑</span></a>
        </div>
      </footer>
    </main>
  );
}
