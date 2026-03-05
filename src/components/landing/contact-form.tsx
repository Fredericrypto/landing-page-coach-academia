"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Wand2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { generateDraftAction } from "@/app/actions";

const formSchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório." }).min(2, "Nome deve ter pelo menos 2 caracteres."),
  phone: z.string({ required_error: "WhatsApp é obrigatório." }).min(10, "Número de telefone inválido."),
  objective: z.enum(['Emagrecer', 'Ganhar massa', 'Condicionamento', 'Outro'], { required_error: "Selecione um objetivo." }),
  message: z.string({ required_error: "Mensagem é obrigatória." }).min(10, "Sua mensagem deve ter pelo menos 10 caracteres.").max(500, "Sua mensagem não pode exceder 500 caracteres."),
});

type Objective = 'Emagrecer' | 'Ganhar massa' | 'Condicionamento' | 'Outro';

export function ContactForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const selectedObjective = form.watch("objective");

  const handleGenerateMessage = async () => {
    if (!selectedObjective || selectedObjective === "Outro") {
      toast({
        title: "Seleção Necessária",
        description: "Por favor, escolha um objetivo (diferente de 'Outro') para gerar uma mensagem.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateDraftAction(selectedObjective as Objective);
      if (result.draft) {
        form.setValue("message", result.draft, { shouldValidate: true });
        toast({
          title: "Mensagem Gerada!",
          description: "Um rascunho de mensagem foi criado para você.",
        });
      } else if (result.error) {
        toast({
          title: "Erro",
          description: result.error,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro Inesperado",
        description: "Não foi possível gerar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is a placeholder for form submission logic, e.g., using EmailJS.
    // Replace with your actual implementation.
    console.log("Form submitted:", values);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo seu contato. Retornaremos em breve!",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp / Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(47) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="objective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual seu principal objetivo?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Emagrecer">Emagrecer</SelectItem>
                  <SelectItem value="Ganhar massa">Ganhar massa muscular</SelectItem>
                  <SelectItem value="Condicionamento">Melhorar condicionamento</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
                <div className="flex items-center justify-between">
                    <FormLabel>Sua Mensagem</FormLabel>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleGenerateMessage}
                        disabled={isGenerating || !selectedObjective || selectedObjective === "Outro"}
                        className="text-primary hover:text-primary/90"
                    >
                        {isGenerating ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Wand2 className="mr-2 h-4 w-4" />
                        )}
                        Gerar com IA
                    </Button>
                </div>
              <FormControl>
                <Textarea
                  placeholder="Conte-nos um pouco sobre seus objetivos e como podemos ajudar..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full" variant="secondary">
          Enviar Mensagem
        </Button>
      </form>
    </Form>
  );
}
