export interface SkillDTO {
    title:string,
    progressInPercent:string,
    skillLevel:string
}

export const SkillInfo:SkillDTO[] = [
    {title:"Node.js",progressInPercent:"85",skillLevel:"Advanced"},
    {title:"Typescript",progressInPercent:"90",skillLevel:"Advanced"},
    {title:"Angular",progressInPercent:"90",skillLevel:"Advanced"},
    {title:"Flutter,Native Android Development",progressInPercent:"90",skillLevel:"Experienced"},
    {title:"Java,C++,C",progressInPercent:"78",skillLevel:"Experienced"},
    {title:"Dart",progressInPercent:"85",skillLevel:"Intermediate"},
    {title:"Python,Javascript",progressInPercent:"85",skillLevel:"Advanced"},
    {title:"MySQL,MongoDB,PostgresSQL",progressInPercent:"80",skillLevel:"Advanced"},
    {title:"Payment Integration(Chapa)",progressInPercent:"70",skillLevel:"Experienced"},
    {title:"SMS Integration(Twilio)",progressInPercent:"70",skillLevel:"Experienced"},
]; 