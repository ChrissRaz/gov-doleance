import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';
import { Card, Input, Button, FormGroup } from '../../components/ui';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <PageWrapper maxWidth="sm">
        <Card className="mt-20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              Connexion administrateur
            </h1>
            <p className="text-gray-600">
              Accédez au tableau de bord présidentiel
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="admin@gouv.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Se connecter
              </Button>
            </FormGroup>
          </form>
        </Card>
      </PageWrapper>
    </>
  );
}
