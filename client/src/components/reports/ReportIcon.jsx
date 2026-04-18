import {
    FiHeart,
    FiBriefcase,
    FiDollarSign,
    FiCompass,
    FiSun,
    FiMoon,
    FiUsers,
    FiTrendingUp,
    FiStar,
} from 'react-icons/fi'

const ICONS = {
    heart: FiHeart,
    briefcase: FiBriefcase,
    dollar: FiDollarSign,
    compass: FiCompass,
    sun: FiSun,
    moon: FiMoon,
    users: FiUsers,
    trending: FiTrendingUp,
}

export default function ReportIcon({ iconKey, className }) {
    const Icon = ICONS[iconKey] || FiStar
    return <Icon className={className} />
}
