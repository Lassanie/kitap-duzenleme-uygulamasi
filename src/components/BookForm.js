import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.date : '',
        date: props.book ? props.book.date : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {bookname, author, price, quantity} = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '';
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author, price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        } else {
            errorMsg = 'Lütfen tüm sahaları doldurun.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
      const {name, value} = event.target;
      switch (name) {
        case 'quantity':
            if (value === '' || parseInt(value) === +value ) {
                setBook((prevState) =>({
                    ...prevState,
                    [name]: value
                }));
            }
            break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                    [name]: value
                    }));
                }
                break;
                default:
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
      }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
            <Form.Label>Kitap adı</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="bookname"
                value={bookname}
                placeholder="Kitabın adı..."
                onChange={handleInputChange}
                />
         </Form.Group>

         <Form.Group controlId="author">
            <Form.Label>Yazar adı</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="author"
                value={author}
                placeholder="Yazarın adı..."
                onChange={handleInputChange}
                />
         </Form.Group>
         
         <Form.Group controlId="quantity">
            <Form.Label>Miktar</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Miktar"
                onChange={handleInputChange}
                />
         </Form.Group>
         
         <Form.Group controlId="price">
            <Form.Label>Fiyat</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="price"
                value={price}
                placeholder="Fiyat"
                onChange={handleInputChange}
                />
         </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
            Getir
            </Button>
        </Form>
        </div>
    );
};

export default BookForm;