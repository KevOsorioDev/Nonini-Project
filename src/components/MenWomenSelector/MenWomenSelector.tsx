import './MenWomenSelector.css'

type MenWomenSelectorProps = {
  active: number;
  setActive: (index: number) => void;
}

export const MenWomenSelector = ( {active, setActive} : MenWomenSelectorProps )  => {

  const options = [
    "Hombres",
    "Mujeres",
    "Unisex"
  ]

  return (
    <div className="men-women-selector">
      {options.map((label, index) => (
        <button
          key={index}
          className={`selector-button ${active === index ? 'active' : ''}`}
          onClick={() => setActive(index)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}