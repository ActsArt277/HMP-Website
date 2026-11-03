import { useState } from "react";

const parishLogo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Glossy%20Red%20Heart%20in%20Motion-yvfS9c0n4ReJfYjHhMjDjVCGKwIuiR.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ prayer: "", registration: "" });
  const parishEmail = "REPLACE_WITH_PARISH_EMAIL";

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formType = form.dataset.parishForm;

    if (!parishEmail.includes("@")) {
      setFormStatus((current) => ({
        ...current,
        [formType]: "Form not configured yet. Replace the parish email in App.jsx before publishing.",
      }));
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`${formType === "prayer" ? "Prayer request / Mass intention" : "Parish registration"} — Holy Martyrs Parish`);
    const message = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    window.location.href = `mailto:${parishEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
    setFormStatus((current) => ({
      ...current,
      [formType]: "Your email app should open with your message ready to send.",
    }));
  }

  return (
    <>
    <a className="skip-link" href="#main">Skip to main content</a>

    <div className="notice-bar">
      <div className="container notice-inner">
        <p><span className="notice-dot" aria-hidden="true"></span> Parish notice: <strong>[REPLACE: Add an urgent announcement or remove this banner]</strong></p>
        <a href="#events">See notices <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Holy Martyrs Parish home">
          <span className="brand-mark" aria-hidden="true"><img src={parishLogo} alt="" /></span>
          <span className="brand-copy">
            <strong>Holy Martyrs Parish</strong>
            <span>Archdiocese of Monrovia</span>
          </span>
        </a>

        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="menu-toggle-label">Menu</span>
          <span className="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>

        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation" onClick={(event) => { if (event.target instanceof HTMLAnchorElement) setMenuOpen(false); }}>
          <a href="#about">Our parish</a>
          <a href="#mass">Mass & sacraments</a>
          <a href="#ministries">Ministries</a>
          <a href="#events">News & events</a>
          <a href="#donors">Donors & support</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="#visit">Plan a visit <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> A Catholic community in Barnesville</p>
            <h1 id="hero-title">A home for faith.<br /><span>A family for life.</span></h1>
            <p className="hero-intro">Welcome to Holy Martyrs Parish. Come as you are, celebrate the Eucharist with us, and find a place to grow in faith and serve our neighbors.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#visit">Plan your first visit <span aria-hidden="true">→</span></a>
              <a className="text-link hero-mass-link" href="#mass"><span className="play-icon" aria-hidden="true">▶</span> Find a Mass time</a>
            </div>
            <div className="hero-note">
              <span className="note-cross" aria-hidden="true">✝</span>
              <p><strong>One faith, one family, one mission.</strong><br />A parish of the Catholic Archdiocese of Monrovia</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame hero-photo">
              <img src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&amp;fit=crop&amp;w=1200&amp;q=75" alt="Placeholder stock photograph of a church congregation gathered in worship; replace with a Holy Martyrs Parish photo." fetchPriority="high" />
              <span className="photo-caption"><span className="caption-dot" aria-hidden="true"></span> [REPLACE: Holy Martyrs Parish community photo]</span>
            </div>
            <div className="hero-stamp" aria-label="Holy Martyrs Parish, Monrovia, Liberia">
              <span className="stamp-cross" aria-hidden="true">✝</span>
              <span>HOLY MARTYRS<br /><small>MONROVIA · LIBERIA</small></span>
            </div>
            <span className="hero-decoration" aria-hidden="true"></span>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>COME AND SEE</span>
          <span className="hero-bottom-line" aria-hidden="true"></span>
          <span>BARNESVILLE OLD FIELD</span>
        </div>
      </section>

      <section className="mass-strip" aria-label="Sunday Mass schedule">
        <div className="container mass-strip-inner">
          <div className="mass-strip-title">
            <span className="mass-icon" aria-hidden="true">✝</span>
            <div><span className="eyebrow-small">GATHER WITH US</span><strong>Sunday Mass</strong></div>
          </div>
          <div className="mass-time"><span className="time-label">EARLY MASS</span><strong>[REPLACE: time]</strong></div>
          <div className="mass-time"><span className="time-label">MAIN MASS</span><strong>[REPLACE: time]</strong></div>
          <a className="mass-more" href="#mass">Full schedule <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section mission-section" aria-labelledby="mission-title">
        <div className="container mission-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-line"></span> Our calling</p>
            <h2 className="section-title" id="mission-title">Rooted in Christ.<br /><span>Here for one another.</span></h2>
          </div>
          <div className="mission-copy">
            <p>As a Catholic family in Barnesville, we gather around the Eucharist, grow through the sacraments, and carry Christ's love into our homes and community.</p>
            <a className="text-link" href="#about">Discover our parish <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="container reflection-wrap">
          <div className="reflection-card">
            <span className="reflection-icon" aria-hidden="true">✦</span>
            <div>
              <span className="eyebrow-small">GOSPEL & REFLECTION</span>
              <p>[REPLACE: Add today's Gospel reading or a short reflection from the parish.]</p>
            </div>
            <a href="https://bible.usccb.org/daily-bible-reading" target="_blank" rel="noopener noreferrer">Read today's readings <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="photo-frame about-photo">
              <img src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&amp;fit=crop&amp;w=960&amp;q=75" alt="Placeholder stock photograph of a church interior; replace with an image of Holy Martyrs Parish." loading="lazy" />
              <span className="photo-caption">[REPLACE: Photo of Holy Martyrs Parish]</span>
            </div>
            <div className="photo-side-note"><span className="note-cross" aria-hidden="true">✝</span><span>FAITHFUL<br />THROUGH EVERY<br />GENERATION</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> Who we are</p>
            <h2 className="section-title" id="about-title">A parish family<br />in <span>Barnesville.</span></h2>
            <p className="lead">Holy Martyrs Parish is a Catholic community in Barnesville Old Field, united in worship, formed by the Gospel, and committed to serving one another.</p>
            <p>[REPLACE: Add the parish's founding story and a brief account of its Holy Martyrs patronage.]</p>
            <p>As part of the Catholic Archdiocese of Monrovia, we share in the life and mission of the local Church across Liberia.</p>
            <a className="text-link" href="#contact">Come meet us <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="pastor-section" aria-labelledby="pastor-title">
        <div className="container pastor-grid">
          <div className="pastor-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p className="eyebrow eyebrow-light">A word from our pastor</p>
            <h2 id="pastor-title">There is a place<br />for you here.</h2>
            <blockquote>[REPLACE: Add a short personal welcome from the parish priest.]</blockquote>
            <p className="pastor-signature">In Christ, <span>[REPLACE: Fr. Name]</span><small>Parish Priest</small></p>
          </div>
          <div className="pastor-image-wrap">
            <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&amp;fit=crop&amp;w=1000&amp;q=75" alt="Placeholder stock photograph; replace with a portrait of the parish priest." loading="lazy" />
            <span>[REPLACE: Photo of the parish priest]</span>
          </div>
        </div>
      </section>

      <section className="section schedule-section" id="mass" aria-labelledby="mass-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line"></span> Worship & sacraments</p>
              <h2 className="section-title" id="mass-title">Come celebrate<br /><span>with us.</span></h2>
            </div>
            <p className="heading-aside">The Eucharist is at the heart of our parish life. All are welcome to join us in prayer.</p>
          </div>
          <div className="schedule-panel">
            <div className="schedule-card schedule-featured">
              <span className="schedule-symbol" aria-hidden="true">✝</span>
              <span className="eyebrow-small">LORD'S DAY</span>
              <h3>Sunday Mass</h3>
              <p>[REPLACE: Sunday Mass times]</p>
              <span className="schedule-detail">[REPLACE: Language(s) and location]</span>
            </div>
            <div className="schedule-card">
              <span className="schedule-symbol" aria-hidden="true">◷</span>
              <span className="eyebrow-small">WEEKDAYS</span>
              <h3>Weekday Mass</h3>
              <p>[REPLACE: Days and times]</p>
              <span className="schedule-detail">[REPLACE: Chapel or church]</span>
            </div>
            <div className="schedule-card">
              <span className="schedule-symbol" aria-hidden="true">☼</span>
              <span className="eyebrow-small">SATURDAY</span>
              <h3>Vigil Mass</h3>
              <p>[REPLACE: Vigil time, or remove if not offered]</p>
              <span className="schedule-detail">[REPLACE: Church location]</span>
            </div>
            <div className="schedule-card">
              <span className="schedule-symbol" aria-hidden="true">✧</span>
              <span className="eyebrow-small">RECONCILIATION</span>
              <h3>Confession</h3>
              <p>[REPLACE: Days and times]</p>
              <span className="schedule-detail">Or contact the parish office</span>
            </div>
          </div>
          <div className="schedule-footnote">
            <p><span aria-hidden="true">ⓘ</span> Mass and confession times may change on holy days. Please check parish notices before travelling.</p>
            <a className="text-link" href="#contact">Ask the parish office <span aria-hidden="true">→</span></a>
          </div>
          <div className="sacraments">
            <div className="sacraments-intro"><span className="eyebrow-small">THE SACRAMENTS</span><h3>Grace for every<br />season of life.</h3><p>Our parish office can help you prepare and take the next step.</p></div>
            <div className="sacrament-list">
              <article className="sacrament-item"><span className="sacrament-number">01</span><div><h4>Baptism</h4><p>Welcome a child into the life of Christ and the Church.</p></div><a href="#contact" aria-label="Ask about Baptism">↗</a></article>
              <article className="sacrament-item"><span className="sacrament-number">02</span><div><h4>First Communion & Confirmation</h4><p>Faith formation and preparation for young people.</p></div><a href="#contact" aria-label="Ask about First Communion and Confirmation">↗</a></article>
              <article className="sacrament-item"><span className="sacrament-number">03</span><div><h4>Marriage</h4><p>Begin marriage preparation with the parish priest.</p></div><a href="#contact" aria-label="Ask about marriage preparation">↗</a></article>
              <article className="sacrament-item"><span className="sacrament-number">04</span><div><h4>Anointing of the Sick</h4><p>Contact us for prayer and pastoral care for the sick.</p></div><a href="#contact" aria-label="Request Anointing of the Sick">↗</a></article>
              <article className="sacrament-item"><span className="sacrament-number">05</span><div><h4>Funerals</h4><p>We accompany families in prayer and Christian hope.</p></div><a href="#contact" aria-label="Ask about funeral arrangements">↗</a></article>
            </div>
            <p className="sacrament-note">[REPLACE: Add registration instructions, required documents, and catechism contact details.]</p>
          </div>
        </div>
      </section>

      <section className="ministries-section section" id="ministries" aria-labelledby="ministries-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> Find your community</p><h2 className="section-title" id="ministries-title">Many gifts.<br /><span>One parish.</span></h2></div>
            <p className="heading-aside">There is a way for everyone to grow, serve, and build friendships here.</p>
          </div>
          <div className="ministry-grid">
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">☼</span><h3>Legion of Mary</h3><p>Prayer and service in the spirit of Our Lady.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">✦</span><h3>Catholic Youth</h3><p>Faith, friendship, and purpose for young people.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">✝</span><h3>Altar Servers</h3><p>Serve the liturgy and grow closer to Christ.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">♫</span><h3>Choir</h3><p>Help our community pray through music.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">♡</span><h3>Women's & Men's Groups</h3><p>Build faith and support one another.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">⌂</span><h3>St. Vincent de Paul</h3><p>Bring practical help and dignity to neighbors.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">✎</span><h3>Catechism & Sunday School</h3><p>Discover and deepen the Catholic faith.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
            <a className="ministry-card" href="#contact"><span className="ministry-icon" aria-hidden="true">♧</span><h3>Outreach & Community</h3><p>Share Christ's love through care and action.</p><span className="card-arrow" aria-hidden="true">↗</span></a>
          </div>
          <p className="ministry-note">[REPLACE: Add ministry coordinators and regular meeting days.]</p>
        </div>
      </section>

      <section className="section news-section" id="events" aria-labelledby="events-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> Life together</p><h2 className="section-title" id="events-title">Parish news<br /><span>& what's on.</span></h2></div>
            <a className="text-link heading-link" href="#contact">Send us an announcement <span aria-hidden="true">↗</span></a>
          </div>
          <div className="news-grid">
            <article className="news-card news-featured">
              <div className="news-image">
                <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&amp;fit=crop&amp;w=1000&amp;q=75" alt="Placeholder stock photograph of an open Bible; replace with a parish event photo." loading="lazy" />
                <span>[REPLACE: Parish event photo]</span>
              </div>
              <div className="news-content"><span className="news-category">PARISH NOTICE · [DATE]</span><h3>[REPLACE: Headline for the latest parish announcement]</h3><p>[REPLACE: Add a short summary of a parish notice, bulletin, or news from the Archdiocese.]</p><a className="text-link" href="#contact">Read the notice <span aria-hidden="true">→</span></a></div>
            </article>
            <div className="event-list">
              <article className="event-item"><div className="event-date"><span>[MON]</span><strong>00</strong></div><div className="event-info"><span className="news-category">LITURGICAL FEAST</span><h3>[REPLACE: Feast day or celebration]</h3><p>[REPLACE: Date] · [REPLACE: Time] · [REPLACE: Place]</p></div></article>
              <article className="event-item"><div className="event-date"><span>[MON]</span><strong>00</strong></div><div className="event-info"><span className="news-category">PARISH GATHERING</span><h3>[REPLACE: Novena, retreat, or parish event]</h3><p>[REPLACE: Date] · [REPLACE: Time] · [REPLACE: Place]</p></div></article>
              <article className="event-item"><div className="event-date"><span>[MON]</span><strong>00</strong></div><div className="event-info"><span className="news-category">COMMUNITY</span><h3>[REPLACE: Outreach or ministry event]</h3><p>[REPLACE: Date] · [REPLACE: Time] · [REPLACE: Place]</p></div></article>
              <a className="all-events-link" href="#contact">[REPLACE: Link to full parish calendar] <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="media-section section" id="media" aria-labelledby="media-title">
        <div className="container media-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> Stay connected</p>
            <h2 className="section-title" id="media-title">Our parish,<br /><span>in pictures.</span></h2>
            <p className="media-intro">A glimpse of the moments, people, and celebrations that make our parish family.</p>
            <a className="button button-outline" href="[REPLACE: Parish Facebook or photo gallery URL]">Visit our gallery <span aria-hidden="true">↗</span></a>
          </div>
          <div className="gallery-preview">
            <div className="gallery-photo gallery-main"><img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&amp;fit=crop&amp;w=850&amp;q=75" alt="Placeholder stock photograph of a community gathering; replace with parishioners." loading="lazy" /><span>[REPLACE: Parish community photo]</span></div>
            <div className="gallery-photo gallery-small"><img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&amp;fit=crop&amp;w=500&amp;q=75" alt="Placeholder stock photograph of people celebrating together; replace with a parish celebration photo." loading="lazy" /><span>[REPLACE: Parish celebration photo]</span></div>
            <div className="gallery-photo gallery-small"><img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;w=500&amp;q=75" alt="Placeholder stock photograph; replace with a parish children's ministry photo." loading="lazy" /><span>[REPLACE: Children's ministry photo]</span></div>
          </div>
          <div className="media-links">
            <a href="[REPLACE: Latest homily audio or video URL]"><span className="media-link-icon" aria-hidden="true">▶</span><span><strong>Homilies & reflections</strong><small>[REPLACE: Link to latest homily]</small></span><span aria-hidden="true">↗</span></a>
            <a href="[REPLACE: Latest parish bulletin PDF URL]"><span className="media-link-icon" aria-hidden="true">▤</span><span><strong>Parish bulletin</strong><small>[REPLACE: Link to latest bulletin PDF]</small></span><span aria-hidden="true">↗</span></a>
            <a href="[REPLACE: Archdiocese of Monrovia news URL]"><span className="media-link-icon" aria-hidden="true">✦</span><span><strong>From the Archdiocese</strong><small>News from the Catholic Archdiocese of Monrovia</small></span><span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section giving-section" id="giving" aria-labelledby="giving-title">
        <div className="container giving-grid">
          <div className="giving-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> Generosity in action</p>
            <h2 className="section-title" id="giving-title">Give with<br /><span>a grateful heart.</span></h2>
            <p>Your generosity helps sustain parish worship and formation, care for our church, and support those in need in our community.</p>
            <p className="giving-note">Give freely and prayerfully. Every gift, large or small, helps our parish live its mission.</p>
          </div>
          <div className="giving-options">
            <article className="giving-option"><span className="giving-option-icon" aria-hidden="true">01</span><div><h3>Orange Money</h3><p>[REPLACE: Registered name, Orange Money number, and giving instructions]</p></div></article>
            <article className="giving-option"><span className="giving-option-icon" aria-hidden="true">02</span><div><h3>Lonestar MTN MoMo</h3><p>[REPLACE: Registered name, MoMo number, and giving instructions]</p></div></article>
            <article className="giving-option"><span className="giving-option-icon" aria-hidden="true">03</span><div><h3>Bank transfer</h3><p>[REPLACE: Bank name, account name, account number, and reference]</p></div></article>
            <article className="giving-option"><span className="giving-option-icon" aria-hidden="true">04</span><div><h3>At Mass</h3><p>Join the offertory during any parish Mass.</p></div></article>
            <a className="text-link giving-question" href="#contact">Questions about giving? Contact us <span aria-hidden="true">→</span></a>
            <a className="text-link giving-question" href="#donors">Meet our supporters <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="donors-section section" id="donors" aria-labelledby="donors-title">
        <div className="container">
          <div className="donors-heading">
            <p className="eyebrow"><span className="eyebrow-line"></span> Together, we make a difference</p>
            <h2 className="section-title" id="donors-title">Thank you for<br /><span>standing with us.</span></h2>
            <p className="donors-intro">We are grateful to every person, family, and organization that supports Holy Martyrs Parish through prayer, generosity, time, and care for our neighbors.</p>
          </div>
          <div className="donor-impact-grid">
            <article className="donor-impact-card">
              <span className="donor-impact-icon" aria-hidden="true">✝</span>
              <h3>Parish life</h3>
              <p>Support helps sustain worship, sacraments, faith formation, and the care of our parish home.</p>
            </article>
            <article className="donor-impact-card">
              <span className="donor-impact-icon" aria-hidden="true">♡</span>
              <h3>Care for our neighbors</h3>
              <p>Parish support helps us accompany people in need and serve our wider Barnesville community.</p>
            </article>
            <article className="donor-impact-card">
              <span className="donor-impact-icon" aria-hidden="true">✦</span>
              <h3>A place to belong</h3>
              <p>Volunteers, ministry members, and donors make room for more people to pray, learn, and grow together.</p>
            </article>
          </div>
          <div className="donor-thanks">
            <div className="donor-thanks-copy">
              <span className="eyebrow-small">WITH GRATITUDE</span>
              <h3>To all who support our parish</h3>
              <p>Thank you for sharing in our mission. We remember our benefactors in prayer.</p>
            </div>
            <div className="donor-list">
              <p>[REPLACE: Add donor names, families, or organizations only with their permission. Remove this note when ready.]</p>
            </div>
          </div>
          <div className="donor-cta">
            <p><strong>Every gift of time, talent, or treasure matters.</strong><br />Find a way to support the parish that feels right for you.</p>
            <a className="button button-navy" href="#giving">Ways to give <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#ministries">Explore ways to serve <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="visit-section section" id="visit" aria-labelledby="visit-title">
        <div className="container visit-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-line"></span> New here? You belong.</p>
            <h2 className="section-title" id="visit-title">Come as<br /><span>you are.</span></h2>
            <p className="visit-lead">Walking into a new church can feel like a big step. We'll be glad to welcome you.</p>
            <a className="button button-navy" href="#contact">Let us know you're coming <span aria-hidden="true">→</span></a>
            <div className="becoming-catholic">
              <span className="becoming-icon" aria-hidden="true">✝</span>
              <p><strong>Exploring the Catholic faith?</strong><br />We'd love to help you learn more or get started with RCIA / OCIA.</p>
              <a href="#contact">Ask about becoming Catholic <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="visit-details">
            <article><span className="visit-number">01</span><div><h3>What should I expect?</h3><p>You'll find prayer, Scripture, and the celebration of the Eucharist. Follow along as you're comfortable; greeters can help you find your way.</p></div></article>
            <article><span className="visit-number">02</span><div><h3>What should I wear?</h3><p>Come in clean, respectful clothing that feels comfortable for worship. You don't need anything special to visit.</p></div></article>
            <article><span className="visit-number">03</span><div><h3>Where can I park?</h3><p>[REPLACE: Add parking, accessible entry, and nearby transport information.]</p></div></article>
            <article><span className="visit-number">04</span><div><h3>Can I join the parish?</h3><p>Yes. We'd be happy to help you register and find a ministry or community to call your own.</p></div></article>
          </div>
        </div>
      </section>

      <section className="forms-section section" aria-labelledby="forms-title">
        <div className="container">
          <div className="forms-heading"><p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> We're here for you</p><h2 className="section-title" id="forms-title">Share a prayer.<br /><span>Find your place.</span></h2><p>Request a Mass intention, send us a prayer request, or let us know you'd like to join our parish family.</p></div>
          <div className="forms-grid">
            <form className="parish-form" data-parish-form="prayer" onSubmit={handleFormSubmit}>
              <span className="form-step">01 / PRAYER</span><h3>Prayer & Mass intention</h3>
              <label htmlFor="prayer-name">Your name</label><input id="prayer-name" name="name" autoComplete="name" required />
              <label htmlFor="prayer-email">Your email or phone</label><input id="prayer-email" name="contact" autoComplete="email" required />
              <label htmlFor="prayer-type">I'd like to</label><select id="prayer-type" name="requestType"><option>Share a prayer request</option><option>Request a Mass intention</option></select>
              <label htmlFor="prayer-message">Message for the pastor's office</label><textarea id="prayer-message" name="message" rows="3" required></textarea>
              <button className="button button-gold" type="submit">Prepare request <span aria-hidden="true">→</span></button>
              <p className="form-status" role="status" aria-live="polite">{formStatus.prayer}</p>
              <p className="form-privacy">Your message opens in your email app; it is not stored on this website.</p>
            </form>
            <form className="parish-form" data-parish-form="registration" onSubmit={handleFormSubmit}>
              <span className="form-step">02 / BELONGING</span><h3>Join our parish family</h3>
              <label htmlFor="register-name">Your name</label><input id="register-name" name="name" autoComplete="name" required />
              <label htmlFor="register-contact">Email or phone</label><input id="register-contact" name="contact" required />
              <label htmlFor="register-household">Household or family name <span>(optional)</span></label><input id="register-household" name="household" />
              <label htmlFor="register-message">Anything you'd like us to know <span>(optional)</span></label><textarea id="register-message" name="message" rows="3"></textarea>
              <button className="button button-gold" type="submit">Contact the parish office <span aria-hidden="true">→</span></button>
              <p className="form-status" role="status" aria-live="polite">{formStatus.registration}</p>
              <p className="form-privacy">Your message opens in your email app; it is not stored on this website.</p>
            </form>
          </div>
          <div className="community-signup"><div><span className="community-icon" aria-hidden="true">↗</span><p><strong>Get parish updates on WhatsApp</strong><br />Join our community for announcements and reminders.</p></div><a href="https://wa.me/231XXXXXXXXX" className="button button-outline-light">Join the WhatsApp community <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="contact-section section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> We'd love to hear from you</p><h2 className="section-title" id="contact-title">Find your way<br /><span>to Holy Martyrs.</span></h2></div>
            <p className="heading-aside">Come worship with us or get in touch with the parish office. You are always welcome.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">⌖</span><div><span className="eyebrow-small">OUR ADDRESS</span><p>Holy Martyrs Parish<br />Barnesville Old Field<br />Montserrado County, Monrovia, Liberia</p><a href="https://maps.google.com/?q=Barnesville+Old+Field%2C+Monrovia%2C+Liberia" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">◷</span><div><span className="eyebrow-small">PARISH OFFICE</span><p>[REPLACE: Office days and opening hours]</p></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">☎</span><div><span className="eyebrow-small">CALL OR WHATSAPP</span><p><a href="tel:+231XXXXXXXXX">[REPLACE: +231 phone number]</a></p><a href="https://wa.me/231XXXXXXXXX">Message us on WhatsApp <span aria-hidden="true">↗</span></a></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">✉</span><div><span className="eyebrow-small">EMAIL</span><p><a href="mailto:REPLACE@parish.org">[REPLACE: parish email address]</a></p></div></div>
              <div className="social-links"><span className="eyebrow-small">FOLLOW OUR PARISH</span><a href="[REPLACE: Parish Facebook page URL]">Facebook <span aria-hidden="true">↗</span></a><a href="[REPLACE: Parish YouTube channel URL]">YouTube <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="map-frame">
              <iframe title="Map showing the Barnesville Old Field area in Monrovia, Liberia" src="https://maps.google.com/maps?q=Barnesville%20Old%20Field%2C%20Monrovia%2C%20Liberia&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="map-label"><span className="map-pin" aria-hidden="true">✝</span><div><strong>Holy Martyrs Parish</strong><span>Barnesville Old Field, Monrovia</span></div><a href="https://maps.google.com/?q=Barnesville+Old+Field%2C+Monrovia%2C+Liberia" target="_blank" rel="noopener noreferrer" aria-label="Open map directions in a new tab">↗</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark" aria-hidden="true"><img src={parishLogo} alt="" /></span><span className="brand-copy"><strong>Holy Martyrs Parish</strong><span>One faith, one family, one mission.</span></span></a><p>A Catholic parish of the Archdiocese of Monrovia, serving our neighbors in Barnesville and beyond.</p></div>
        <div className="footer-links"><h2>Explore</h2><a href="#about">Our parish</a><a href="#mass">Mass & sacraments</a><a href="#ministries">Ministries</a><a href="#events">News & events</a><a href="#giving">Give & support</a><a href="#donors">Donors & support</a></div>
        <div className="footer-links"><h2>Visit us</h2><p>Barnesville Old Field<br />Montserrado County<br />Monrovia, Liberia</p><a href="#contact">Contact the parish office</a><a href="https://[REPLACE: Archdiocese website URL]">Catholic Archdiocese of Monrovia ↗</a></div>
        <div className="footer-connect"><span className="eyebrow-small">WE'LL SAVE YOU A PLACE</span><a className="button button-gold" href="#visit">Plan your visit <span aria-hidden="true">→</span></a><a href="https://wa.me/231XXXXXXXXX">WhatsApp the parish <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="footer-bottom"><div className="container"><span>© <span>{new Date().getFullYear()}</span> Holy Martyrs Parish · Monrovia, Liberia</span><span>Built on faith, hope & community <span aria-hidden="true">✦</span></span></div></div>
    </footer>

    <a className="floating-whatsapp" href="https://wa.me/231XXXXXXXXX" aria-label="Message Holy Martyrs Parish on WhatsApp"><span aria-hidden="true">◔</span><span>WhatsApp us</span></a>
      </>
  );
}
