import { resolve } from 'url';
import { Oferta } from './shared/oferta.model';
export class OfertaService {
    public ofertas : Oferta[] =
    [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]
    public getOferta(): Promise<Oferta[]>{
        return new Promise((resolve, reject ) => {
            console.log('processamento')
            let deucerto = true
            if (deucerto){
            setTimeout(() => resolve(this.ofertas), 5000)
            }
            else{
            reject({mensagem_erro:404, mensagem :'Servidor não encontrado Yow'});
            }
                     
        })
        .then((ofertas : Oferta[]) => {
            console.log('yow')
            return ofertas
        })
        .then((ofertas : Oferta[]) => {
            console.log('yow2')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2(ofertas)}, 5000)
            })
        })
        .then((ofertas : Oferta[]) => {
            console.log('yow3')
            return ofertas
        })
    }
}


