<template>
    <ul>
        <li v-for="member in members" :key="member.id"> 
            <p>Nom : {{ member.firstName}}, Prenom : {{ member.lastName}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            members:[
                {
                    id:1,
                    firstName: 'Yves',
                    lastName: 'Kouadio',
                    old: 22
                },
                {
                    id:2,
                    firstName: 'Arsene',
                    lastName: 'Kouadio',
                    old: 26
                },
                {
                    id:3,
                    firstName: 'Ange',
                    lastName: 'Konan',
                    old: 30
                },
                {
                    id:4,
                    firstName: 'Leo',
                    lastName: 'Kipeu',
                    old: 24
                },
            ]
        }
    }
}
</script>