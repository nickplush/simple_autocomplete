import React, {useState} from "react";
import './autocomplete.css'

const Autocomplete = ({arr}) => {
    const array = [...new Set(arr)]
    const [search, setSearch] = useState('')
    const [variants, setVariants] = useState([])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)

    const handleChangeValue = e => {
        const inputValue = e.target.value.toLowerCase()
        if (inputValue) {
            setValue(0)
            setSearch(inputValue)
            setVariants(array.filter(item => String(item).toLowerCase().indexOf(inputValue) + 1).slice(0, 8))
        } else {
            setVariants([])
        }
    }

    const handleClickVariant = (variant) => {
        setSearch(variant)
        setValue(variants.indexOf(variant))
        setOpen(false)
    }
    const handleKeyDown = e => {
        if (value < variants.length - 1)
            if (e.keyCode === 40) {
                setValue(value + 1)
            }
        if (value > 0)
            if (e.keyCode === 38) {
                setValue(value - 1)
            }
        if (e.keyCode === 13) {
            setSearch(variants[value])
        }
    }

    return (
        <div>
            <input
                placeholder='Enter...'
                value={search}
                onChange={handleChangeValue}
                onFocus={() => {
                    setOpen(true)
                }}
                // onBlur={() => {
                //     setOpen(false)
                // }}
                onKeyDown={handleKeyDown}
            />
            {Boolean(open && variants.length) &&
            <div className='container'>
                {variants.map(
                    item =>
                        <div
                            key={item}
                            className={`variant ${item === variants[value] ? 'choose' : ''} `}
                            onClick={() => handleClickVariant(item)}
                        >
                            {item}
                        </div>
                )}
            </div>
            }
        </div>

    )

}

export default Autocomplete
