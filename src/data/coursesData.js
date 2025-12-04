import Frontend from "../assets/Frontend.webp";
import FullStack from "../assets/FulStack.webp";
import Python from "../assets/PythonDevop.webp";
import Java from "../assets/JavaBackend.webp";
import ItHelpDesk from "../assets/HelpDesk.webp";
import CyberSecurity from '../assets/CyberSecurity.webp'
import OfisProqramları from '../assets/OfisProqramları.webp'
import PraktikiKompüter from '../assets/PraktikiKompüter.webp'
import İngilisdilikursu from '../assets/İngilisdilikursu.webp'
import DataAnalitika from '../assets/DataAnalitika.webp'
const coursesData = [
    {
        id: 1,
        title: "Front-End Proqramlaşdırma Kursu",
        description: "İnteraktiv və müasir veb saytlar yarat!",
        weeksPerWeek: 2,
        duration: "5 ay",
        bgColor: "#F4F97D",
        image: Frontend,
        tags: ["html", "css", "javascript", "typescript", "react.js", "next.js", "tailwind", "git",],
    },
    {
        id: 2,
        title: "Full Stack Proqramlaşdırma kursu",
        description: "Sıfırdan tam hazır veb tətbiqlər yarat!",
        weeksPerWeek: 2,
        duration: "7 ay",
        bgColor: "#E9B8E5",
        image: FullStack,
        tags: [
            "javascript",
            "typescript",
            "tailwind",
            "react.js",
            "next.js",
            "express",
            "node",
        ],
    },
    {
        id: 3,
        title: "Python Back-End Proqramlaşdırma kursu",
        description:
            "Güclü serverlər, API-lər və miqyaslana bilən tətbiqlər yaradın!",
        weeksPerWeek: 2,
        duration: "6 ay",
        bgColor: "#A8E6B7",
        image: Python,
        tags: ["django", "rabbitmq", "celery", "api", "ai", "redis", "postgresql"],
    },
    {
        id: 4,
        title: "Java Back-End Proqramlaşdırma kursu",
        description:
            "Dayanıqlı serverlər, API-lər və miqyaslana bilən sistemlər yaradın!",
        weeksPerWeek: 2,
        duration: "6 ay",
        bgColor: "#F5B8A8",
        image: Java,
        tags: ["spring boot", "apache kafka", "postgresql", "redis", "rabbitmq"],
    },
    {
        id: 5,
        title: "IT Help Desk kursu",
        description: "IT öyrən, real problemləri həll et, karyerana yön ver!",
        weeksPerWeek: 2,
        duration: "4 ay",
        bgColor: "#B8E3F5",
        image: ItHelpDesk,
        tags: [
            "əməliyyat sistemləri",
            "troubleshooting",
            "maintenance",
            "texniki dəstək",
        ],
    },
    {
        id: 6,
        title: "Kibertəhlükəsizlik kursu",
        description: "Hücumdan müdafiəyə - kibertəhlükəsizlik üzrə ekspert ol!",
        weeksPerWeek: 2,
        duration: "6 ay",
        bgColor: "#E8A8A8",
        image: CyberSecurity,
        tags: ["klassik", "etik haking", "pentest", "şəbəkə", "vulnerabilty"],
    },
    {
        id: 7,
        title: "Ofis Proqramları kursu",
        description: "Ofis Proqramlarını peşəkar səviyyədə öyrən!",
        weeksPerWeek: 2,
        duration: "2 ay",
        bgColor: "#F5D8B8",
        image: OfisProqramları,
        tags: ["word", "microsoft excel", "microsoft power point", "outlook"],
    },
    {
        id: 8,
        title: "Praktiki Kompüter Bilikləri kursu",
        description: "Hər kəs üçün əlçatan praktiki kompüter təhsili!",
        weeksPerWeek: 2,
        duration: "2 ay",
        bgColor: "#B8F5D8",
        image: PraktikiKompüter,
        tags: ["proqram təminatı", "əməliyyat sistemi", "editor", "canva", "gmail"],
    },
    {
        id: 9,
        title: "İngilis dili kursu",
        description: "İngilis dilində sərbəst danış!",
        weeksPerWeek: 2,
        duration: "6 ay",
        bgColor: "#B8F5F0",
        image: İngilisdilikursu,
        tags: ["general english", "pre-ielts", "grammar", "speaking", "writing"],
    },
    {
        id: 10,
        title: "Data Analitika kursu",
        description: "Veriləndən faydalı məlumata çevir!",
        weeksPerWeek: 2,
        duration: "4 ay",
        bgColor: "#E9B8E5",
        image: DataAnalitika,
        tags: ["python", "sql", "power bi", "excel", "statistika", "data"],
    },
];

export default coursesData;
