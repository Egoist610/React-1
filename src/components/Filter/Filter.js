import {Label} from "./../Form/Form.styles";


const Filter = () => {
    return (
<div>
            <Label htmlFor="search">Поиск по названию</Label>
            <input id="search" placeholder="Начни вводить" />
          </div>

    );
};

export default Filter;