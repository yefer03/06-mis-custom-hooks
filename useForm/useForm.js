import { useState } from "react";


export const useForm = ( initialForm ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            //Se coloca entre corchetes la propiedad del objeto que va a cambiar
            //las otras propiedades del objeto siguen mantentiendo su valor
            [ name ] : value,
        });

    };


    const onResetForm = () => {

        setFormState( initialForm );
    };


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
