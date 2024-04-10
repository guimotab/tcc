import { PrismaClient as PrismaClient1 } from '../prisma/generated/postgre';
const client1 = new PrismaClient1();
try {
    const res = await client1.$connect();
    console.log("Banco conectado");
}
catch (err) {
    console.error(err);
}
finally {
    await client1.$disconnect();
}
//# sourceMappingURL=app.js.map