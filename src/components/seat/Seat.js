import React from 'react';
import './seat.css';

const Seat = (props) => {
	const { seat, setTimer, seatStatus } = props;

	const resolvedClass = {
		background: '#aa9d9e',
		pointerEvents: 'none'
	};

	if (seat.type === 'standart') {
		return (
			<div className="" onClick={setTimer}>
				<div
					className="seat standart"
					onClick={seatStatus(seat.id, seat)}
					style={seat.reserved === true ? resolvedClass : {}}>
					{seat.number}
				</div>
			</div>
		);
	} else if (seat.type === 'lux') {
		return (
			<div className="cinema-seats" onClick={setTimer}>
				<div
					className="seat lux"
					onClick={seatStatus(seat.id, seat)}
					style={seat.reserved === true ? resolvedClass : {}}>
					{seat.number}
				</div>
			</div>
		);
	} else if (seat.type === 'premium') {
		return (
			<div className="cinema-seats" onClick={setTimer}>
				<div
					className="seat premium"
					onClick={seatStatus(seat.id, seat)}
					style={seat.reserved === true ? resolvedClass : {}}>
					{seat.number}
				</div>
			</div>
		);
	} else {
		return <div className="cinema-seats">Loading...</div>;
	}
};
export default Seat;
