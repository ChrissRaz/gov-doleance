import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PageWrapper } from '../../components/layout';
import { Card, Input, Button, FormGroup } from '../../components/ui';

const heroBackground = '/assets/hero-palace.jpeg';
const seal = '/assets/republique.png';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [language, setLanguage] = useState('fr');

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
      <div className="relative isolate overflow-hidden bg-[#0d2545]">
        <div className="absolute right-6 top-5 z-10 flex items-center gap-3">
          <label htmlFor="login-language-select" className="sr-only">
            Changer de langue
          </label>
          <select
            id="login-language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-sm font-semibold text-white border border-white/40 rounded-lg px-3 py-2 bg-white/10 backdrop-blur-sm hover:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <option className="text-gray-900" value="mg">MG</option>
            <option className="text-gray-900" value="fr">FR</option>
            <option className="text-gray-900" value="en">EN</option>
          </select>
          <Link
            to="/portail"
            className="text-sm font-semibold text-white border border-white/40 rounded-lg px-3 py-2 bg-white/10 backdrop-blur-sm hover:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Aide
          </Link>
        </div>
        <img src={heroBackground} alt="Palais" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2545]/92 via-[#0d2545]/88 to-[#0b8a65]/75" />
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-6 py-10 text-white">
          <img src={seal} alt="Armoirie" className="h-16 w-16 object-contain" />
          <div>
            <p className="text-sm font-semibold tracking-[0.25em]">REPOBLIKAN’I</p>
            <p className="text-2xl font-bold">MADAGASCARA</p>
          </div>
        </div>
      </div>

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
              Accédez à votre tableau de bord de gestion
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

            <div className="flex flex-col gap-3">
              <Button type="submit" size="lg" className="w-full">
                Se connecter
              </Button>
              <Link
                to="/signup"
                className="text-center text-sm font-semibold text-primary hover:underline"
              >
                Pas de compte ? S’inscrire
              </Link>
            </div>
          </form>
        </Card>
      </PageWrapper>
    </div>
  );
}
