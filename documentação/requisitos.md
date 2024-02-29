// gerenciador de votações para integrantes sem/com intervenção do criador da reunião
// o sistema deve criar reuniões para dividir tarefas pelas pessoas pelas suas aptidões e resolver conflitos

------------- Requisitos Funcionais (RF) -------------
(admin)
- deve ser possível gerenciar reuniões
- deve ser possível escolher pessoas pelo email para participar de reuniões
- deve ser possível gerenciar usuários das reuniões
- deve ser possível criar enquetes de múltiplas/única escolha
- deve ser possível criar distribuidor de tarefas

(usuario)
- deve ter tela de login para usuários acessarem reunião em que foram chamados
- deve votar/escolher as propostas que achar mais interessantes para si
- devem poder conversar em um grupo

------------- Requisitos Não Funcionais -------------

- login com tokens

------------- Regras de Negócio (RN) -------------
 
- projeto deve ser feito com redux, next, shadcn, tailwind, postgress, prisma
- o convite com o acesso deve ser recebido por email

- as reuniões criadas podem ser criadas podendo receber intervenção pelo criador da reunião ou não
- mostrar se houve intervenção do criador na reunião no final e mostrar em quem interviu
- se não houver intervenção, os conflitos devem ser resolvidos automaticamente