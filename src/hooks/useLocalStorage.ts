import { useState } from 'react';

type SetValue<T> = (value: T) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>, () => void] => {
  // Função para obter o valor atual do localStorage ou o valor inicial fornecido
  const getInitialValue = (): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  // Estado para armazenar o valor atual
  const [value, setValue] = useState<T>(getInitialValue);

  // Função para atualizar o valor no estado e no localStorage
  const updateValue: SetValue<T> = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Função para remover o valor do localStorage
  const removeValue = () => {
    localStorage.removeItem(key);
  };

  // Retornar o valor atual, a função de atualização e a função de remoção
  return [value, updateValue, removeValue];
};

export default useLocalStorage;
