import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="left">
        <p>
          © 2025 Nonini.
        </p>
      </div>

      <div className="center">
        <p>Nuestras redes</p>
        <ul>
          <li>
            <a href="">
              Instagram
            </a>
          </li>
          <li>
            <a href="">
              Facebook
            </a>
          </li>
          <li>
            <a href="">
              Whatsapp
            </a>
          </li>
        </ul>
      </div>

      <div className="right">
        <span>Suscribite a nuestro newsletter!</span>
        <form>
          <input
            type="email"
            placeholder="Ingresa tu email"
            required
          />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </footer>
  )
}