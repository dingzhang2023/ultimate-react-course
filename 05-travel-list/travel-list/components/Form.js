import { useState } from 'react';

const Form = ({ onAddItems }) => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault(); // for SPA no reload

		if (!description) return;

		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};

		// Call Parent function(Props) to share state Parent as a channel to other child
		onAddItems(newItem);

		setDescription('');
		setQuantity(1);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you do for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
					<option value={n} key={n}>
						{n}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>ADD</button>
		</form>
	);
};

export default Form;
