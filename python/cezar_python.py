# -*- coding: utf-8 -*-
alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
alphabet_eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


def convert_postion(item_search, position):
	if item_search.isdigit():
		
		item_search = int(item_search)
		new_position = item_search + position
		new_array = 10 - item_search

		if new_array < position:
			old_position = position - new_array
			return old_position

		if new_array == position:
			return 0

		if new_array > position:
			return item_search + position
	else:

		upper_char = False
		if item_search.isupper():
			upper_char = True

		item_search = item_search.lower()


		if (item_search in alphabet):
			alphabet_final  = alphabet

		elif (item_search in alphabet_eng):
			alphabet_final  = alphabet_eng
		else:
			return item_search

		

		new_position = alphabet_final.index(item_search) + position
		

		new_array = len(alphabet_final) - (alphabet_final.index(item_search) + 1)

		if new_array < position:
			old_position = (position - new_array)-1
			return alphabet_final[old_position]


		if item_search == alphabet_final[-1]:
			new_position = alphabet_final.index(item_search)


		if upper_char:
			return alphabet_final[new_position].upper()
		else:
			return alphabet_final[new_position]



def shifr_programm(message, position):

	new_text = ''

	message = str(message)
	if not message:
		print("Empty String")
	else:
		for char_item in message:
			new_char =  convert_postion(char_item, position)
			new_text += str(new_char)

	print(message)
	print(new_text)

	print('____________')


	return new_text

def test_snouden():
	print('тестирование')

	message = 'абв'
	res = shifr_programm(message, 2)
	if (res[0] == 'в'):
		print("Тест пройден")

	message = '123'
	res = shifr_programm(message, 2)
	if (res[0] == '3'):
		print("Тест пройден")


shifr_programm('але', 3)
test_snouden()
