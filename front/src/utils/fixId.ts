/**
 * Retira todos os "-" e deixa com tamanho de 24 caracteres para ficar compatível com o id do MongoDb
 * @param groupId 
 * @returns 
 */
export default function fixId(groupId: string) {
  const idFixed = groupId.replaceAll("-", "").substring(0, 24)
  return idFixed
}