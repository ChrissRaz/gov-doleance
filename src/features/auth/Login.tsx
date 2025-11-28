import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageWrapper maxWidth="sm" className="py-8 pb-20">
        <div className="mb-6">
          <Link to="/">
            <button className="px-5 py-2.5 bg-white text-text font-semibold rounded-lg border-2 border-gray-300 hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Revenir
            </button>
          </Link>
        </div>

        <Card className="mt-4 mb-8" padding="lg">
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

          <form onSubmit={handleSubmit} className="space-y-5">
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
          </form>
        </Card>
      </PageWrapper>
    </div>
  );
}
