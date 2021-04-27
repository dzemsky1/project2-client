'use strict'
const store = require('./store')

const onSignUpSuccess = function () {
  $('#sign-up-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Youre all signed up!')
  // $('#sign-in-form').css('opacity', '1')
  // $('#sign-up-form').css('opacity', '.3')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#animal-options').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#signed-in-options').show()
  $('.toast').toast('show')
  $('.toast-body').text('Welcome!')
}

const onSignOutSuccess = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#signed-in-options').hide()
  $('#animal-options').hide()
  $('.toast').toast('show')
  $('.toast-body').text('Goodbye!')
  console.log(store.user)
  // store.user = null
}

const onChangePasswordSuccess = function () {
  $('#change-password-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Good Choice!')
}

const onCreateSuccess = function () {
  $('#create-form').trigger('reset')
  console.log('animal created?')
  $('.toast').toast('show')
  $('.toast-body').text('Roaaaarrrrrrrr!')
}


const onViewSuccess = function (response) {
  console.log(response.animals)
  $('#animal-list').html('')
  for (let i = 0; i < response.animals.length; i++) {
      const name = response.animals[i].name
      const skill = response.animals[i].skill
      const id = response.animals[i]._id
      $('#animal-list').append('<br/> Name: ' + name + '<br/> Skill: ' + skill + '<br/> Id: ' + id + '<br/> Comments: ' + '<br/>')
      for (let j = 0; j < response.animals[i].comments.length; j++) {
        const comments = response.animals[i].comments[j]['body']
        const owner = response.animals[i].comments[j]['owner']
        $('#animal-list').append(comments + ' - ' + owner + '<br/>')
      }
      // console.log(response.animals[i].comments[j])
      // $('#animal-list').append(comments)
    }

  $('.toast').toast('show')
  $('.toast-body').text('Here they are!')
}

// const onViewSuccess = function (response) {
//   console.log(response.animals)
//   $('#animal-list').html('')
//   for (let i = 0; i < response.animals.length; i++) {
//     for (let j = 0; j < response.animals[i].comments; j++) {
//       const name = response.animals[i].name
//       const skill = response.animals[i].skill
//       const id = response.animals[i]._id
//       $('#animal-list').append('<br/> Name: ' + name + '<br/> Skill: ' + skill + '<br/> Id: ' + id + '<br/> Comments: ' + '<br/>')
//       const comments = response.animals[i].comments[j]['body']
//       console.log(response.animals[i].comments[j])
//       $('#animal-list').append(comments)
//     }
//   }
//   $('.toast').toast('show')
//   $('.toast-body').text('Here they are!')
// }

const onAllViewSuccess = function (response) {
  $('#all-animal-list').html('')
  for (let i = 0; i < response.animals.length; i++) {
      const name = response.animals[i].name
      const skill = response.animals[i].skill
      const id = response.animals[i]._id
      const owner = response.animals[i].owner['email']
      $('#all-animal-list').append('<br/> Owner:' + owner + '<br/> Name: ' + name + '<br/> Skill: ' + skill + '<br/> Id: ' + id + '<br/> Comments: ' + '<br/>')
      for (let j = 0; j < response.animals[i].comments.length; j++) {
        const comments = response.animals[i].comments[j]['body']
        const owner = response.animals[i].comments[j]['owner']
        $('#all-animal-list').append(comments + ' - ' + owner + '<br/>')
      }
      // console.log(response.animals[i].comments[j])
      // $('#animal-list').append(comments)
    }

  $('.toast').toast('show')
  $('.toast-body').text('Here they are!')
}

const onUpdateSuccess = function (response) {
  // console.log(response)
  $('.toast').toast('show')
  $('.toast-body').text('Updated!')
}

const onDestroySuccess = function (response) {
  $('#destroy-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Its a sad day on the farm')
}


const error = function () {
  $('.toast').toast('show')
  $('.toast-body').text('Error!')
}

const onCommentSuccess = function (response) {
  $('#comment-form').trigger('reset')
  $('.toast').toast('show')
  $('.toast-body').text('Nice Comment')
}





module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateSuccess,
  onViewSuccess,
  onUpdateSuccess,
  onDestroySuccess,
  onAllViewSuccess,
  onCommentSuccess,
  error
}
