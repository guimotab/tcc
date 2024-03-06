// gerenciador de votações para integrantes sem/com intervenção do criador da reunião
// o sistema deve criar reuniões para dividir tarefas pelas pessoas pelas suas aptidões e resolver conflitos

------------- Requisitos Funcionais (RF) -------------
- deve conter aba de criação de grupo
- deve conter abab de edição dos grupos
- deve conter aba chat
- deve conter aba de configurações
- deve conter aba de reuniões, enquetes e distribuidor de tarefas

------------- Requisitos Não Funcionais -------------

- login com tokens
- login no google

------------- Regras de Negócio (RN) -------------
 
- projeto deve ser feito com redux, next, shadcn, tailwind, postgress e mongo, prisma
- o convite com o acesso deve ser recebido por email

- as reuniões criadas podem ser criadas podendo receber intervenção pelo criador da reunião ou não
- mostrar se houve intervenção do criador na reunião no final e mostrar em quem interviu
- se não houver intervenção, os conflitos devem ser resolvidos automaticamente

- usuário - criador {
  - tem a capacidade sobre todo o grupo
  - pode inserir novos integrantes
  - pode criar cargos e atribuir funcionalidades a eles
}

- usuário - com permissão {
  - pode executar as funções que o criador permitiu
}