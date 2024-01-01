const teachers = [
    {
        'name': 'Professor Dumbledore',
        'position': 'Headmaster',
        'id': 1,
        'idParent': 0,
        'availability': 'present',
    },
    {
        'name': 'Minerva McGonagall',
        'position': 'Headmistress',
        'id': 2,
        'idParent': 1,
        'availability': 'absent',
    },
    {
        'name': 'Rubeus Hagrid',
        'position': 'Potions Master',
        'id': 3,
        'idParent': 2,
        'availability': 'absent',
    },
    {
        'name': 'Horace Slughorn',
        'position': 'teacher',
        'id': 4,
        'idParent': 2,
        'availability': 'present',
    },
    {
        'name': 'Severus Snape',
        'position': 'teacher',
        'id': 5,
        'idParent': 2,
        'availability': 'present',
    },
    {
        'name': 'Defense Against the Dark Arts',
        'position': 'Potions Master',
        'id': 6,
        'idParent': 1,
        'availability': 'absent',
    },
    {
        'name': 'Remus Lupin',
        'position': 'teacher',
        'id': 7,
        'idParent': 5,
        'availability': 'present',
    },
    {
        'name': 'Gilderoy Lockhart',
        'position': 'teacher',
        'id': 8,
        'idParent': 5,
        'availability': 'present',
    }
]

const getTeachers = async (req, res) => {
    res.status(200).json(teachers);
  };

  export default getTeachers;