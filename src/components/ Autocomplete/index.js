import React, {useState} from "react";
import PropTypes from 'prop-types'
import './autocomplete.css'

const Autocomplete = ({ arr ,valueSelection}) => {
    const array = [...new Set(arr)]
    const [search, setSearch] = useState('')
    const [variants, setVariants] = useState([])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)

    const handleChangeValue = e => {
        setOpen(true)
        const inputValue = e.target.value.toLowerCase()
        if (inputValue.length) {
            setValue(0)
            setSearch(inputValue)
            setVariants(array.filter(item => String(item).toLowerCase().indexOf(inputValue) + 1).slice(0, 8))
        } else {
            setSearch(inputValue)
            setVariants([])
        }
    }

    const handleClickVariant = (variant) => {
        setSearch(variant)
        setValue(variants.indexOf(variant))
        setOpen(false)
        valueSelection(variant)
        document.querySelector('input').blur()
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
            valueSelection((variants[value]))
            setOpen(false)
            document.querySelector('input').blur()
        }
    }

    return (
        <div className='container'>
            <input
                id='autocomplete'
                className='autocomplete'
                placeholder='Enter...'
                value={search}
                onChange={handleChangeValue}
                onFocus={() => {
                    setOpen(true)
                }}
                onKeyDown={handleKeyDown}
            />
            {Boolean(open && variants.length) &&
            <div>
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

Autocomplete.propTypes = {
    arr: PropTypes.array,
    valueSelection: PropTypes.func
}

export default Autocomplete
