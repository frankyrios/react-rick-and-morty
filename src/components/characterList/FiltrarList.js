export const FiltrarList = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				type='text'
				placeholder='Nombre del personaje. Ejemplo: Rick'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}