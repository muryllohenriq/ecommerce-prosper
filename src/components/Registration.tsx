import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegistration = () => {
    const fieldErrors = {};
    if (!fullName) fieldErrors.fullName = 'Campo obrigatório.';
    if (!email) fieldErrors.email = 'Campo obrigatório.';
    if (!phone) fieldErrors.phone = 'Campo obrigatório.';
    if (!address) fieldErrors.address = 'Campo obrigatório.';
    if (!cep) fieldErrors.cep = 'Campo obrigatório.';
    if (!logradouro) fieldErrors.logradouro = 'Campo obrigatório.';
    if (!numero) fieldErrors.numero = 'Campo obrigatório.';
    if (!bairro) fieldErrors.bairro = 'Campo obrigatório.';
    if (!cidade) fieldErrors.cidade = 'Campo obrigatório.';
    if (!estado) fieldErrors.estado = 'Campo obrigatório.';
    if (!password) fieldErrors.password = 'Campo obrigatório.';
    if (!confirmPassword) fieldErrors.confirmPassword = 'Campo obrigatório.';
    if (!privacyPolicyChecked) fieldErrors.privacyPolicy = 'Você deve aceitar as políticas de privacidade.';

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    console.log('Cadastro realizado com sucesso!');
    console.log('Nome Completo:', fullName);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('Endereço:', address);
    console.log('CEP:', cep);
    console.log('Logradouro:', logradouro);
    console.log('Número:', numero);
    console.log('Complemento:', complemento);
    console.log('Bairro:', bairro);
    console.log('Cidade:', cidade);
    console.log('Estado:', estado);
    console.log('Senha:', password);
    console.log('Confirmação de Senha:', confirmPassword);
    console.log('Aceitou as políticas de privacidade:', privacyPolicyChecked);

    setErrors({});
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginBottom: '5rem' }}>
      <Form>
        <Form.Group controlId="formFullName">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            isInvalid={!!errors.fullName}
          />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formCep">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            isInvalid={!!errors.cep}
          />
          <Form.Control.Feedback type="invalid">{errors.cep}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formLogradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            isInvalid={!!errors.logradouro}
          />
          <Form.Control.Feedback type="invalid">{errors.logradouro}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formNumero">
          <Form.Label>Número</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            isInvalid={!!errors.numero}
          />
          <Form.Control.Feedback type="invalid">{errors.numero}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formComplemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            isInvalid={!!errors.bairro}
          />
          <Form.Control.Feedback type="invalid">{errors.bairro}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formCidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite sua cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            isInvalid={!!errors.cidade}
          />
          <Form.Control.Feedback type="invalid">{errors.cidade}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            isInvalid={!!errors.estado}
          />
          <Form.Control.Feedback type="invalid">{errors.estado}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPrivacyPolicy">
          <Form.Check
            type="checkbox"
            label="Aceitar as políticas de privacidade"
            checked={privacyPolicyChecked}
            onChange={(e) => setPrivacyPolicyChecked(e.target.checked)}
            isInvalid={!!errors.privacyPolicy}
          />
          <Form.Control.Feedback type="invalid">{errors.privacyPolicy}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" onClick={handleRegistration}>
          Salvar Cadastro
        </Button>

        {Object.keys(errors).length > 0 && (
          <Alert variant="danger" style={{ marginTop: '15px' }}>
            Por favor, corrija os erros no formulário antes de enviar.
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default RegistrationPage;