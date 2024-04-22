export default function fixId(groupId: string) {
  const idFixed = groupId.replaceAll("-", "").substring(0, 24)
  return idFixed
}