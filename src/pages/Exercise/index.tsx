import { useState, useEffect, useRef } from 'react'
import { Carousel, Container, Inner, Item, SearchBar, CarouselBodyParts, ItemBodyPart } from "./styles";
import { motion } from "framer-motion";
import { fetchData, exerciseOptions } from '../../utils/fetchData';

import { Barbell, MagnifyingGlass } from 'phosphor-react'

import workout1 from '../../assets/workout1.jpg';
import workout2 from '../../assets/workout2.jpg';
import workout3 from '../../assets/workout3.jpg';
import workout4 from '../../assets/workout4.jpg';
import workout5 from '../../assets/workout5.jpg';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import { url } from 'inspector';


const images = [workout1, workout2, workout3, workout4, workout5]
//const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises'

interface ExerciseProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

// interface BodyParts {
//   name: string;
// }

export function Exercise() {
  const carousel = useRef(null);
  const carouselBodyParts = useRef(null);
  const [width, setWidth] = useState(0)
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [bodyParts, setBodyParts] = useState([]);


  const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises'
  const bodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
  //const url = `${baseUrl}/name/${search}`
  const { data } = useFetch<ExerciseProps[]>(baseUrl, exerciseOptions)
  const { data: bodyPartsData } = useFetch<[]>(bodyPartsUrl, exerciseOptions)



  async function handleSearchAll() {

    setExercises(data.filter(
      (exercise) => exercise.name.includes(search)
        || exercise.bodyPart.includes(search)
        || exercise.equipment.includes(search)
        || exercise.target.includes(search)
    ))
    console.log(exercises)
  }

  useEffect(() => {
    handleSearchAll()
  }, [search])

  useEffect(() => {
    axios.get(baseUrl, exerciseOptions)
      .then(response => {
        setExercises(response.data)
      })

    axios.get(bodyPartsUrl, exerciseOptions)
      .then(response => {
        setBodyParts(response.data)
      })
  }, [])

  useEffect(() => {
    setBodyParts(bodyPartsData)
  }, [])


  // async function handleSearchExercise() {
  //   const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}`
  //   axios.get(url, exerciseOptions)
  //     .then(response => {
  //       setExercises(response.data)
  //     })
  // }

  // useEffect(() => {
  //   if (!search) {
  //     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
  //     axios.get(url, exerciseOptions)
  //       .then(response => {
  //         setBodyParts(response.data)
  //       })
  //     console.log('testetetetet')
  //   } else {
  //     handleSearchExercise()
  //   }
  // }, [search])

  function handleSelectBodyPart(bodyPart: string) {
    setSearch(bodyPart)
  }


  useEffect(() => {
    //console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    setWidth(carouselBodyParts.current?.scrollWidth - carouselBodyParts.current?.offsetWidth)
  }, [])

  return (
    <Container>
      <SearchBar onSubmit={handleSearchAll}>
        <input
          type="text"
          placeholder='Digite o exercício'
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <button >
          <MagnifyingGlass size={32} />
        </button>
      </SearchBar>
      <CarouselBodyParts ref={carouselBodyParts} as={motion.div} whileTap={{ cursor: 'grabbing' }} >
        <Inner as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }} animate={{ x: 0 }}
          transition={{ duration: 0.8 }}>
          {bodyParts?.map(exercise => (
            <ItemBodyPart as={motion.button} key={exercise} onClick={(e) => handleSelectBodyPart(exercise)}>
              <Barbell size={32} />
              <strong>{exercise}</strong>
            </ItemBodyPart>
          ))}

        </Inner>
      </CarouselBodyParts>


      <Carousel ref={carousel} as={motion.div} whileTap={{ cursor: 'grabbing' }} >
        <Inner as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }} animate={{ x: 0 }}
          transition={{ duration: 0.8 }}>
          {exercises?.map(exercise => (
            <Item as={motion.button} key={exercise.id}>
              <img src={exercise.gifUrl} alt="test" />
              <strong>{exercise.name}</strong>
            </Item>
          ))}

        </Inner>
      </Carousel>
    </Container>
  )
}