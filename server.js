const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'phone': '010-1111-1111',
            'area': '서울특별시'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이순신',
            'phone': '010-2222-2222',
            'area': '경기도'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이황',
            'phone': '010-3333-3333',
            'area': '부산광역시'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));