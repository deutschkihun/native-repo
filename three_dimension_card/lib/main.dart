import 'package:flutter/material.dart';
import 'package:three_dimension_card/gift_card_list_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: const GiftCardListPage(),
    );
  }
}

// https://velog.io/@cyb9701/%ED%86%A0%EC%8A%A4-%EC%83%81%ED%92%88%EA%B6%8C-3D-%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98