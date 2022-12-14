PGDMP     /                    z            postgres    14.5    14.5     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    13754    postgres    DATABASE     e   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3313                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            ?           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            ?            1259    16405    welbex    TABLE     ?   CREATE TABLE public.welbex (
    id integer NOT NULL,
    date date,
    name text,
    quantity integer,
    distance integer
);
    DROP TABLE public.welbex;
       public         heap    postgres    false            ?            1259    16410    welbex_id_seq    SEQUENCE     ?   ALTER TABLE public.welbex ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.welbex_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            ?          0    16405    welbex 
   TABLE DATA           D   COPY public.welbex (id, date, name, quantity, distance) FROM stdin;
    public          postgres    false    210   ?
       ?           0    0    welbex_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.welbex_id_seq', 32, true);
          public          postgres    false    211            ^           2606    16409    welbex welbex_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.welbex
    ADD CONSTRAINT welbex_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.welbex DROP CONSTRAINT welbex_pkey;
       public            postgres    false    210            ?   M  x?ES[nA???ˢ???]8L? a)H??"?!?Nˎ}??Q5;???O?TWWU[q??&|??~ѭ??G??t?;?b?[sa?????????Ϸv?????7=?o??]bN&?m????빭?{???`""???V?J??X$?d?~???g?{??????-!J??d??iΓ??????????L)왧;??}? ?G??~˚	0>???c?Eߡtj+?(?΃k?6?*??3j?j-??2?I?=???C{Ct?? ???>?f?dc?????Un?-??Z?hlj?+?t?.?d???(?	?????)5??lB?N?;?!Ӗ%???kY`E??#?C+?ol???R?R̠ڗ???S4???[??Z?f??֟|ݮ{?;"`=/C??E?8s? ]0???a?:????8?????k'zĘ?aE??=Lf????p?}'z)?ǡע?Mg???@?HO#7J?j??????L?R???<??#??w?Z3Z?zĘ??UOie??????rv!G]
T?nk??!\??c{?70??k>@ x?8???;???A{?Se<?E?7??ˑ???Ƙ?B(p     