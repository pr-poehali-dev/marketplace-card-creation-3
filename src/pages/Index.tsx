import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    'https://cdn.poehali.dev/files/a1bc820e-ff69-4bd4-bdd8-29ac39d53036.jpeg',
    'https://cdn.poehali.dev/projects/63db7990-8aa0-4544-ac3b-16fff400b5f7/files/02f9d692-b42a-433d-a4db-d7a542f6b59c.jpg',
    'https://cdn.poehali.dev/projects/63db7990-8aa0-4544-ac3b-16fff400b5f7/files/20e1595c-4cef-4bba-aab0-355a0800a3dc.jpg',
    'https://cdn.poehali.dev/projects/63db7990-8aa0-4544-ac3b-16fff400b5f7/files/9a9b667d-8675-484c-b004-47c2acec8739.jpg'
  ];

  const specifications = [
    { icon: 'Ruler', label: 'Размер', value: '35×28×12 см', progress: 85 },
    { icon: 'Weight', label: 'Вес', value: '650 г', progress: 45 },
    { icon: 'Package', label: 'Объем', value: '11.8 л', progress: 70 },
    { icon: 'Shield', label: 'Прочность', value: 'Высокая', progress: 95 },
    { icon: 'Droplet', label: 'Водостойкость', value: 'IP54', progress: 75 },
    { icon: 'Zap', label: 'Качество', value: 'Premium', progress: 90 }
  ];

  const instructions = [
    { step: 1, title: 'Распаковка', description: 'Аккуратно извлеките сумку из упаковки', icon: 'Package' },
    { step: 2, title: 'Осмотр', description: 'Проверьте качество швов и фурнитуры', icon: 'Eye' },
    { step: 3, title: 'Регулировка', description: 'Отрегулируйте ремни под свой рост', icon: 'Settings' },
    { step: 4, title: 'Использование', description: 'Распределите вещи по отделениям', icon: 'CheckCircle' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-white">
                  <img 
                    src={images[selectedImage]} 
                    alt="Product" 
                    className="w-full h-full object-contain p-8 animate-fade-in"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    -25%
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <Card 
                  key={idx}
                  className={`cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${
                    selectedImage === idx ? 'ring-2 ring-primary shadow-lg' : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <CardContent className="p-0">
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full aspect-square object-cover" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold text-foreground">Кожаная сумка Premium</h1>
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Icon name="Heart" size={24} />
                </Button>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">(248 отзывов)</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold text-primary">4 990 ₽</span>
                <span className="text-2xl text-muted-foreground line-through">6 650 ₽</span>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="instructions">Инструкция</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/63db7990-8aa0-4544-ac3b-16fff400b5f7/files/02f9d692-b42a-433d-a4db-d7a542f6b59c.jpg" 
                        alt="Описание характеристик" 
                        className="w-full h-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/63db7990-8aa0-4544-ac3b-16fff400b5f7/files/20e1595c-4cef-4bba-aab0-355a0800a3dc.jpg" 
                        alt="Размеры и параметры" 
                        className="w-full h-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon name="Sparkles" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Премиальное качество</h3>
                            <p className="text-muted-foreground">Изготовлена из натуральной итальянской кожи высшего сорта. Каждая деталь продумана до мелочей.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon name="Briefcase" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Функциональность</h3>
                            <p className="text-muted-foreground">Множество отделений для организации вещей. Подходит для работы, путешествий и повседневного использования.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon name="Gem" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Стильный дизайн</h3>
                            <p className="text-muted-foreground">Современный минималистичный дизайн сочетается с классическими элементами. Подчеркнет ваш вкус и статус.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="specs" className="space-y-3 mt-6">
                {specifications.map((spec, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name={spec.icon as any} size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-foreground">{spec.label}</span>
                            <span className="text-primary font-bold">{spec.value}</span>
                          </div>
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                              style={{ width: `${spec.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="instructions" className="space-y-4 mt-6">
                {instructions.map((instr) => (
                  <Card key={instr.step} className="hover:shadow-md transition-all hover:translate-x-1 duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                            {instr.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon name={instr.icon as any} size={20} className="text-primary" />
                            <h4 className="font-semibold text-lg">{instr.title}</h4>
                          </div>
                          <p className="text-muted-foreground">{instr.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            <div className="flex gap-3 pt-4">
              <Button size="lg" className="flex-1 text-lg h-14 shadow-lg hover:shadow-xl transition-shadow">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                В корзину
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-6 hover:bg-primary hover:text-white transition-colors">
                <Icon name="Zap" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Icon name="Truck" size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Доставка 1-3 дня</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Icon name="RotateCcw" size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Возврат 30 дней</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Icon name="Shield" size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Гарантия 2 года</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;